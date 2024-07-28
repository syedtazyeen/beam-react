import { HLSPlayer } from "@/components/video";
import { HLS_URL } from "@/config/api.config";
import { useGetStreamKeyQuery } from "@/redux/features/profile/api";

const StreamView: React.FC<{ setStarted: (state: boolean) => void }> = ({ setStarted }) => {
    const { data: streamKeyResponse } = useGetStreamKeyQuery();
    function renderHlsPlayer() {
        return (
            <div className='relative flex items-center bg-[black] aspect-[16/9]'>
                <HLSPlayer
                    url={`${HLS_URL}/${streamKeyResponse?.data[0].streamKey}/index.m3u8`}
                    onError={(error: any) => console.error(error)}
                    onStateChanged={(state: boolean) => setStarted(state)}
                />
            </div>
        );
    }

    return <div>{renderHlsPlayer()}</div>;
};

export default StreamView