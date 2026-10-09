import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Box,
  Text,
  useColorModeValue,
  usePrefersReducedMotion
} from '@chakra-ui/react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule
} from 'react-simple-maps'
import { visitedCities } from '../lib/visited-cities'

const GEO_URL = '/maps/countries-110m.json'

const CityMarker = ({
  city,
  isActive,
  onSelect,
  fill,
  ring,
  reduceMotion
}) => {
  const [dx = 0, dy = 0] = city.markerOffset || []
  const scale = isActive ? 1.35 : 1

  return (
    <Marker coordinates={city.coordinates}>
      <g
        transform={`translate(${dx}, ${dy}) scale(${scale})`}
        style={{
          cursor: 'pointer',
          transition: reduceMotion ? undefined : 'transform 180ms ease',
          outline: 'none'
        }}
        onMouseEnter={() => onSelect(city)}
        onClick={e => {
          e.stopPropagation()
          onSelect(city)
        }}
        onFocus={() => onSelect(city)}
        tabIndex={0}
        role="button"
        aria-pressed={isActive}
        aria-label={`${city.city}, ${city.country}`}
      >
        <circle r={7} fill={fill} opacity={isActive ? 0.22 : 0.12} />
        <circle r={3.2} fill={fill} stroke={ring} strokeWidth={1.1} />
      </g>
    </Marker>
  )
}

const VisitMap = ({ cities = visitedCities }) => {
  const [active, setActive] = useState(null)
  const [loadError, setLoadError] = useState(false)
  const mapRef = useRef(null)
  const reduceMotion = usePrefersReducedMotion()

  const land = useColorModeValue('#d4c9b6', '#2f2f35')
  const border = useColorModeValue('rgba(91, 84, 76, 0.32)', 'rgba(200, 194, 184, 0.24)')
  const sphereStroke = useColorModeValue('rgba(91, 84, 76, 0.4)', 'rgba(200, 194, 184, 0.32)')
  const graticule = useColorModeValue('rgba(91, 84, 76, 0.09)', 'rgba(200, 194, 184, 0.08)')
  const ocean = useColorModeValue('#ebe3d5', '#232326')
  const marker = useColorModeValue('#146b66', '#7fc6c0')
  const markerRing = useColorModeValue('#fffdf8', '#202023')
  const tooltipBg = useColorModeValue('rgba(255, 253, 248, 0.94)', 'rgba(32, 32, 35, 0.94)')
  const tooltipBorder = useColorModeValue('rgba(91, 84, 76, 0.18)', 'rgba(200, 194, 184, 0.2)')
  const tooltipFg = useColorModeValue('#2d2a26', '#eceae6')
  const tooltipMuted = useColorModeValue('#6b645c', '#a8a39b')
  const shadow = useColorModeValue(
    '0 18px 40px rgba(91, 84, 76, 0.12)',
    '0 18px 40px rgba(0, 0, 0, 0.35)'
  )
  const vignette = useColorModeValue(
    'radial-gradient(ellipse at 50% 42%, rgba(255,253,248,0.55) 0%, transparent 62%)',
    'radial-gradient(ellipse at 50% 42%, rgba(70,70,76,0.45) 0%, transparent 62%)'
  )

  const sortedCities = useMemo(
    () =>
      [...cities].sort((a, b) => {
        if (a.coordinates[1] !== b.coordinates[1]) {
          return b.coordinates[1] - a.coordinates[1]
        }
        return a.coordinates[0] - b.coordinates[0]
      }),
    [cities]
  )

  useEffect(() => {
    let cancelled = false
    fetch(GEO_URL)
      .then(res => {
        if (!res.ok && !cancelled) setLoadError(true)
      })
      .catch(() => {
        if (!cancelled) setLoadError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Clear selection when tapping empty map area (useful on touch)
  useEffect(() => {
    const onPointerDown = e => {
      if (!mapRef.current?.contains(e.target)) return
      if (e.target.closest('g[role="button"]')) return
      setActive(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  if (loadError) {
    return (
      <Box mt={2} textAlign="center" color={tooltipMuted} fontSize="sm">
        Map could not be loaded. Please refresh the page.
      </Box>
    )
  }

  return (
    <Box ref={mapRef} position="relative" w="100%" mt={2}>
      <Box
        borderRadius="18px"
        overflow="hidden"
        bg={ocean}
        boxShadow={shadow}
        backgroundImage={vignette}
      >
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 155, center: [0, 8] }}
          width={800}
          height={420}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <Sphere
            id="visit-map-sphere"
            fill="transparent"
            stroke={sphereStroke}
            strokeWidth={0.6}
          />
          <Graticule stroke={graticule} strokeWidth={0.4} step={[20, 20]} />
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={land}
                  stroke={border}
                  strokeWidth={0.35}
                  style={{
                    default: { outline: 'none', pointerEvents: 'none' },
                    hover: { outline: 'none', pointerEvents: 'none' },
                    pressed: { outline: 'none', pointerEvents: 'none' }
                  }}
                />
              ))
            }
          </Geographies>
          {sortedCities.map(city => (
            <CityMarker
              key={city.id}
              city={city}
              isActive={active?.id === city.id}
              onSelect={setActive}
              fill={marker}
              ring={markerRing}
              reduceMotion={reduceMotion}
            />
          ))}
        </ComposableMap>
      </Box>

      <Box
        mt={3}
        minH="2.75rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={2}
      >
        {active ? (
          <Box
            px={3}
            py={1.5}
            borderRadius="999px"
            bg={tooltipBg}
            border="1px solid"
            borderColor={tooltipBorder}
            boxShadow="sm"
            transition={reduceMotion ? undefined : 'opacity 160ms ease'}
          >
            <Text
              as="span"
              fontFamily="body"
              fontWeight="600"
              fontSize="sm"
              color={tooltipFg}
            >
              {active.city}
            </Text>
            <Text as="span" fontSize="sm" color={tooltipMuted} ml={1.5}>
              · {active.country}
            </Text>
          </Box>
        ) : (
          <Text fontSize="sm" color={tooltipMuted} opacity={0.85}>
            Tap or hover a marker · {cities.length} cities
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default VisitMap
