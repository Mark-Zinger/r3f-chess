import styled from "styled-components";


const WaterMarks = () => {
  
  
  return (
    <>
      <VideoFrom>
        video from <a target="_blank" href="https://www.youtube.com/watch?v=vE6wWaoEVQA&ab_channel=EugeneBelsky">Eugene Belsky</a>
      </VideoFrom>
      <CreatedBy>
        <a target="_blank" href="https://www.youtube.com/watch?v=vE6wWaoEVQA&ab_channel=EugeneBelsky">source code</a>
        <br/>
        created by <a target="_blank" href="https://github.com/Mark-Zinger">Mark Zinger</a>
      </CreatedBy>
      <Sources>
        models by <a target="_blank" href="https://www.youtube.com/watch?v=vE6wWaoEVQA&ab_channel=EugeneBelsky">VioletBoom</a>
        <br/>
        powered by <a target="_blank" href="https://github.com/pmndrs/react-three-fiber">react-three-fiber</a>
        <br/>
      </Sources>
    </>
  )
}


const VideoFrom = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
  z-index: 5;
  font-size: 15px;
`

const CreatedBy = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
  z-index: 5;
  font-size: 15px;
  text-align: center;
`
const Sources = styled.div`
  position: absolute;
  right: 15px;
  text-align: right;
  bottom: 15px;
  z-index: 5;
  font-size: 15px;
`

export default WaterMarks;