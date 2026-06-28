'use client';

import dynamic from 'next/dynamic';
import Section from '@/components/Section';
import sfCoords from '@/public/sf-run-coords.json';
import sdCoords from '@/public/sd-run-coords.json';
import sf2Coords from '@/public/sf2-run-coords.json';

const RunMap = dynamic(() => import('@/components/RunMap'), { ssr: false });

const runs = [
  {
    id: 'sf-evening',
    city: 'San Francisco',
    country: 'USA',
    name: 'Evening Run',
    description: 'Through Golden Gate Park and back — quiet streets, golden hour light.',
    date: 'Apr 27, 2026',
    stravaUrl: 'https://www.strava.com/activities/18273541540',
    stats: [
      { label: 'Distance', value: '10.02 km' },
      { label: 'Time', value: '48:27' },
      { label: 'Pace', value: "4'50\"/km" },
      { label: 'Elevation', value: '+87m' },
    ],
    splits: [
      { km: 1, pace: '4:30', elev: -2 },
      { km: 2, pace: '4:48', elev: 3 },
      { km: 3, pace: '4:19', elev: -33 },
      { km: 4, pace: '4:41', elev: -13 },
      { km: 5, pace: '4:30', elev: -16 },
      { km: 6, pace: '4:54', elev: 13 },
      { km: 7, pace: '5:07', elev: 13 },
      { km: 8, pace: '5:44', elev: 33 },
      { km: 9, pace: '4:53', elev: 0 },
      { km: 10, pace: '4:53', elev: 0 },
    ],
    coords: sfCoords as [number, number][],
  },
  {
    id: 'sf-afternoon',
    city: 'San Francisco',
    country: 'USA',
    name: 'Afternoon Run',
    description: 'A different slice of the city — flatter, faster.',
    date: 'May 3, 2026',
    stravaUrl: 'https://www.strava.com/activities/18365513541',
    stats: [
      { label: 'Distance', value: '7.44 km' },
      { label: 'Time', value: '35:46' },
      { label: 'Pace', value: "4'48\"/km" },
      { label: 'Elevation', value: '+7m' },
    ],
    splits: [
      { km: 1, pace: '4:43', elev: -1 },
      { km: 2, pace: '4:52', elev: 0 },
      { km: 3, pace: '4:59', elev: 0 },
      { km: 4, pace: '4:52', elev: 0 },
      { km: 5, pace: '4:45', elev: 0 },
      { km: 6, pace: '4:50', elev: 0 },
      { km: 7, pace: '4:39', elev: 0 },
    ],
    coords: sf2Coords as [number, number][],
  },
  {
    id: 'sd-run',
    city: 'San Diego',
    country: 'USA',
    name: 'San Diego Run',
    description: 'A flat, fast 5k along the bay.',
    date: 'Dec 28, 2025',
    stravaUrl: 'https://www.strava.com/activities/16865964687',
    stats: [
      { label: 'Distance', value: '5.06 km' },
      { label: 'Time', value: '26:16' },
      { label: 'Pace', value: "5'12\"/km" },
      { label: 'Elevation', value: '+15m' },
    ],
    splits: [
      { km: 1, pace: '4:37', elev: 0 },
      { km: 2, pace: '5:06', elev: 0 },
      { km: 3, pace: '5:16', elev: 0 },
      { km: 4, pace: '5:18', elev: 1 },
      { km: 5, pace: '5:39', elev: 9 },
    ],
    coords: sdCoords as [number, number][],
  },
];

export default function RunsPage() {
  return (
    <Section>
      <div className="mb-10 md:mb-14">
        <h1 className="text-3xl md:text-5xl font-serif mb-3">Favorite Runs</h1>
        <p className="text-[12px] md:text-[13px] font-mono text-muted">
          Every city I've landed in, I try to find a route. These are the ones that stuck.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {runs.map((run) => (
          <div key={run.id}>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-serif text-xl md:text-2xl">{run.city}</span>
              <span className="text-[11px] font-mono text-muted uppercase tracking-widest">{run.country}</span>
            </div>

            <div className="border border-foreground/10 overflow-hidden">
              {/* Map */}
              <div style={{ height: '360px', width: '100%' }}>
                <RunMap coords={run.coords} />
              </div>

              {/* Run info + stats */}
              <div className="p-5 md:p-6 border-t border-foreground/10">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="font-mono text-[13px] font-semibold">{run.name}</p>
                    <p className="font-mono text-[11px] text-muted mt-0.5">{run.date}</p>
                    {run.stravaUrl && (
                      <a
                        href={run.stravaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-[10px] font-mono text-accent hover:opacity-70 transition-opacity"
                      >
                        View on Strava ↗
                      </a>
                    )}
                  </div>
                  <p className="font-mono text-[11px] text-muted max-w-xs text-right hidden md:block">
                    {run.description}
                  </p>
                </div>

                {/* Top stats */}
                <div className="grid grid-cols-4 gap-4 pb-5 border-b border-foreground/5">
                  {run.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">{s.label}</p>
                      <p className="text-[13px] md:text-[14px] font-mono text-accent font-semibold">{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Splits */}
                <div className="mt-5">
                  <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">Splits</p>
                  <div className="grid grid-cols-5 md:grid-cols-10 gap-x-3 gap-y-3">
                    {run.splits.map((s) => (
                      <div key={s.km} className="text-center">
                        <p className="text-[9px] font-mono text-muted mb-1">KM {s.km}</p>
                        <p className="text-[11px] font-mono font-semibold">{s.pace}</p>
                        <p className={`text-[9px] font-mono mt-0.5 ${s.elev > 0 ? 'text-muted' : s.elev < 0 ? 'text-accent' : 'text-muted/40'}`}>
                          {s.elev > 0 ? `+${s.elev}m` : s.elev < 0 ? `${s.elev}m` : '—'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
