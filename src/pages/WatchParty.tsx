import { Users, Sparkles } from 'lucide-react';

const WatchParty = () => {
  return (
    <div className="px-4 py-10 max-w-lg mx-auto">
      <div
        className="rounded-[10px] p-6 text-center border border-white/10"
        style={{ background: 'hsla(0, 0%, 0%, 0.45)', backdropFilter: 'blur(18px) saturate(160%)', WebkitBackdropFilter: 'blur(18px) saturate(160%)' }}
      >
        <div className="w-14 h-14 mx-auto rounded-[10px] flex items-center justify-center bg-primary/30 border border-white/10 mb-3">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-lg font-bold text-white mb-1">Watch Party</h1>
        <p className="text-xs text-white/60 mb-4">Listen together with friends in real-time. Coming soon!</p>
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/70">
          <Sparkles className="w-3.5 h-3.5" /> Sync playback · Chat · Reactions
        </div>
      </div>
    </div>
  );
};

export default WatchParty;