const samples = [
  {
    "text": "Nếu thanh khoản tiếp tục cải thiện mà chỉ số không thể bứt phá xa khỏi ngưỡng một nghìn năm trăm điểm, thị trường sẽ tiềm ẩn rủi ro đảo chiều.",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio1.wav"
  },
  {
    "text": "Bán 2 trăm đến 3 trăm suất cơm mang đi mỗi ngày, chị Trúc ở phố Thụy Khuê lo lắng vì vẫn chưa biết cách xác định đâu là loại nhựa bị cấm, đâu là loại được dùng.",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio2.wav"
  },
  {
    "text": "Hỡi quần chúng! Mi không hiểu gì, mi oán ta! Ta vẫn yêu quý mi mặc lòng mi chẳng rõ lòng ta!... Thôi giải tán đi, và cứ việc an cư lạc nghiệp trong hoà bình và trật tự! Ta không dám tự phụ là bậc anh hùng cứu quốc, nhưng ta phải tránh cho mi nạn chiến tranh rồi! Hoà bình vạn tuế!",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio3.wav"
  },
  {
    "text": "Chiều 3 tháng 8, Thủ tướng Phạm Minh Chính và đoàn công tác tới thăm hỏi người dân chịu ảnh hưởng do mưa lũ tại các xã Na Son, Tìa Dình, Xa Dung của tỉnh Điện Biên. Ông động viên, tặng quà các gia đình bị thiệt hại do thiên tai, chia buồn cùng gia đình có người thân bị thiệt mạng.",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio4.wav"
  },
  {
    "text": "Trăm năm trong cõi người ta, Chữ tài chữ mệnh khéo là ghét nhau. Trải qua một cuộc bể dâu, Những điều trông thấy mà đau đớn lòng.",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio5.wav"
  },
  {
    "text": "Sàng tiền minh nguyệt quang, Nghi thị địa thượng sương. Cử đầu vọng minh nguyệt, Đê đầu tư cố hương.",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio6.wav"
  },
  {
    "text": "Từ là từ phu tướng. Bảo kiếm sắc phong lên đàng. Vào ra luống trông tin chàng. Năm canh mơ màng. Em luống trông tin chàng. Ôi gan vàng quặn đau í a",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio7.wav"
  },
  {
    "text": "Chàng thì chạy cõi xa mưa gió, Thiếp thì về buồng cũ chiếu chăn. Đoái trông theo đã cách ngăn, Những màu mây biếc, cũng ngần núi xanh",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio8.wav"
  },
  {
    "text": "Từ trên tàu bay mà nhìn xuống Sông Đà, không ai trong tàu bay nghĩ rằng cái dây thừng ngoằn ngoèo dưới chân mình kia lại chính là cái con sông hằng năm và đời đời kiếp kiếp làm mình làm mẩy với con người Tây Bắc và phản ứng giận dỗi vô tội vạ với người lái đò Sông Đà.",
    "speaker": "Random voice",
    "audio": "assets/data/wav/audio9.wav"
  }
]


// Inject sample entries into the page
function loadSamples() {
  const sampleList = document.getElementById('sample-list');
  samples.forEach(sample => {
    // Create container for this sample
    const sampleDiv = document.createElement('div');
    sampleDiv.className = 'sample';
    // Create and populate transcript paragraph
    const textP = document.createElement('p');
    textP.className = 'transcript';
    textP.innerHTML = '<strong>Text:</strong> ' + sample.text;
    // Create and populate speaker paragraph
    const speakerP = document.createElement('p');
    speakerP.className = 'speaker';
    speakerP.textContent = 'Speaker: ' + sample.speaker;
    // Create audio player element
    const audioEl = document.createElement('audio');
    audioEl.controls = true;
    audioEl.src = sample.audio;
    // Append all parts to the sample div
    sampleDiv.appendChild(textP);
    sampleDiv.appendChild(speakerP);
    sampleDiv.appendChild(audioEl);
    // Add this sample div to the list in the DOM
    sampleList.appendChild(sampleDiv);
  });
}

// fetch('assets/data/samples.json')
//   .then(response => response.json())
//   .then(data => {
//     samples = data;
//     loadSamples();
//   });

// Theme toggle functionality
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Initialize: load samples after DOM is ready
document.addEventListener('DOMContentLoaded', loadSamples);
