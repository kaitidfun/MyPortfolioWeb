import {
  CameraModuleIcon,
  PythonIcon,
  SpotifyIcon,
  LaptopIcon,
  TabletIcon,
  SmartphoneIcon,
} from "./Icons";

const STAGE_ICONS = {
  camera: CameraModuleIcon,
  python: PythonIcon,
  spotify: SpotifyIcon,
};

const DEVICE_ICONS = {
  laptop: LaptopIcon,
  tablet: TabletIcon,
  phone: SmartphoneIcon,
};

function FlowArrow({ label }) {
  return (
    <div className="flex flex-shrink-0 flex-row items-center gap-2 py-1 sm:flex-col sm:justify-center sm:gap-1 sm:py-0">
      <span
        aria-hidden="true"
        className="text-lg text-navy-400 sm:-rotate-90 dark:text-navy-500"
      >
        &darr;
      </span>
      {label && (
        <span className="text-center text-[10px] font-medium uppercase tracking-wide text-navy-400 dark:text-navy-500">
          {label}
        </span>
      )}
    </div>
  );
}

function StageCard({ stage }) {
  const Icon = STAGE_ICONS[stage.icon];
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center gap-2 rounded-xl border border-navy-100 bg-navy-50 p-4 text-center dark:border-navy-700 dark:bg-navy-900">
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center">
          <Icon className="h-8 w-8" />
        </div>
      )}
      <p className="text-xs font-bold text-navy-800 dark:text-white">{stage.label}</p>
      <p className="text-[11px] leading-relaxed text-ink-500 dark:text-navy-400">{stage.detail}</p>
    </div>
  );
}

export default function ArchitectureDiagram({ stages, devices }) {
  return (
    <div className="flex min-w-0 flex-col items-stretch gap-1 sm:flex-row sm:items-center sm:gap-0">
      {stages.map((stage, i) => (
        <div key={stage.label} className="contents">
          <StageCard stage={stage} />
          {i < stages.length - 1 && <FlowArrow label={stage.flow} />}
        </div>
      ))}

      {devices && devices.length > 0 && (
        <>
          <FlowArrow label={stages[stages.length - 1]?.flow} />
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-navy-100 bg-navy-50 p-4 text-center dark:border-navy-700 dark:bg-navy-900">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-400">
              Spotify Connect
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {devices.map((d) => {
                const DeviceIcon = DEVICE_ICONS[d.icon];
                return (
                  <div key={d.label} className="flex flex-col items-center gap-1">
                    {DeviceIcon && (
                      <DeviceIcon className="h-6 w-6 text-navy-700 dark:text-navy-200" />
                    )}
                    <span className="text-[10px] font-medium text-ink-500 dark:text-navy-400">
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] leading-relaxed text-ink-400 dark:text-navy-500">
              + any other Spotify Connect device
            </p>
          </div>
        </>
      )}
    </div>
  );
}
