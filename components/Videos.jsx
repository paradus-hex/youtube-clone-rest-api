import { Box, Stack } from '@mui/system';
import React from 'react';
import { Loader, VideoCard } from './';

const Videos = ({videos,direction}) => {
  if(!videos?.length) return <Loader />;
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