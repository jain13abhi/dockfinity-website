"use client";

interface TechBackgroundProps {
  activePillarIndex?: number | null;
}

export function TechBackground({ activePillarIndex }: TechBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Clean Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%233b82f6' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft Ambient Radial Blue Blobs */}
      <div className="absolute top-12 left-1/4 w-[600px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[130px]" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/12 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-1/3 w-[600px] h-[450px] bg-blue-600/10 dark:bg-blue-500/12 rounded-full blur-[140px]" />

      {/* Pillar Hover Ambient Illumination */}
      {activePillarIndex !== undefined && activePillarIndex !== null && (
        <div
          className="absolute left-0 right-0 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[120px] transition-all duration-500"
          style={{ top: `${20 + activePillarIndex * 15}%` }}
        />
      )}
    </div>
  );
}
