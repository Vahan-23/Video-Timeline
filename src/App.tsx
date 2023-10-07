import { Box, TextInput } from "@mantine/core";
import { useState } from "react";
import HlsVideoTrimmer from "./HlsVideoTrimmer";
import VideoTrimmer from "./VideoTrimmer";
import VideoUploader from "./VideoUploader";

interface XMLHttpRequestWithMethod extends XMLHttpRequest {
  method: string;
}

function App() {
  const [hlsLiveStreamUrl, setHlsLiveStreamUrl] = useState<string>("");
  const [streamUrl, setStreamUrl] = useState<string>("");
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState<string>("");

  const handleVideoUpload = (videoFile: File) => {
    // Прямо здесь вы можете использовать файл без необходимости передачи ссылки
    const uploadedUrl = URL.createObjectURL(videoFile);
    setStreamUrl(uploadedUrl);
  };

  return (
    <Box component="main" p="md">
      <VideoUploader onVideoUpload={handleVideoUpload} />
      {streamUrl && <VideoTrimmer streamUrl={streamUrl} hlsLiveStreamUrl={""} uploadedVideoUrl={""} trimmedStreamUrl={""} />}
     {uploadedVideoUrl && (
        <VideoTrimmer
          streamUrl={uploadedVideoUrl}
          uploadedVideoUrl={uploadedVideoUrl} trimmedStreamUrl={""} hlsLiveStreamUrl={""}       />
      )}
      
    </Box>
    
  );
}

export default App;
