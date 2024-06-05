import StreamConfigCard from './components/StreamConfigCard'

import { useStreamConfigStore } from '@/store/useStreamConfigStore'

export default function StreamConfigList() {
  const streamConfigList = useStreamConfigStore((state) => state.streamConfigList)
  return (
    <>
      {
        <div className="stream-config-list flex flex-col gap-[12px] p-[24px] overflow-y-auto h-[calc(100vh-80px)]">
          {streamConfigList.map((streamConfig, index) => (
            <StreamConfigCard key={index} streamConfig={streamConfig} />
          ))}
        </div>
      }
    </>
  )
}
