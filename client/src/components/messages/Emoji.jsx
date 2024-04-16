// import { useState } from "react"
// import Picker from '@emoji-mart/data';
// import data from '@emoji-mart/data'

// function Emoji() {

//     const [isPickerVisible, setPickerVisible] = useState(false);
//     const [currentEmoji, setCurrentEmoji] = useState(null);

//   return (
//     <div>
//     <button onClick={() => setPickerVisible (!isPickerVisible)}>
//         😊
//     </button>
//     <div className={isPickerVisible ? 'd-block': 'd-none'}>
//         <Picker data={data} previewPosition = "none" onEmojiSelect={(e) => {
//             setCurrentEmoji(e.native)
//             setPickerVisible(!isPickerVisible)
//         }}/>
//     </div>
//     </div>
//   )
// }

// export default Emoji