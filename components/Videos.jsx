import React from 'react';
import { Loader } from './';
const Videos = ({videos}) => {
  if(!videos?.length) return <Loader />;
  console.log(videos,"helloo")
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
        </Box>
      ))}
    </Stack>
  )
}

export default Videos