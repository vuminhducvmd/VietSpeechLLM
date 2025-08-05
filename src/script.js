const samples = [
  {
    text: "Nếu thanh khoản tiếp tục cải thiện mà chỉ số không thể bứt phá xa khỏi ngưỡng một nghìn năm trăm điểm, thị trường sẽ tiềm ẩn rủi ro đảo chiều.",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio1.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Northern woman 2", audio: "assets/data/wav/audio1_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Northern Nam Khanh (Male)", audio: "assets/data/wav/audio1_viettel.wav" }
    ]
  },
  {
    text: "Bán 2 trăm đến 3 trăm suất cơm mang đi mỗi ngày, chị Trúc ở phố Thụy Khuê lo lắng vì vẫn chưa biết cách xác định đâu là loại nhựa bị cấm, đâu là loại được dùng.",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio2.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Northern man", audio: "assets/data/wav/audio2_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Northern Phuong Trang (Female)", audio: "assets/data/wav/audio1_viette2.wav" }
    ]
  },
  {
    text: "Hỡi quần chúng! Mi không hiểu gì, mi oán ta! Ta vẫn yêu quý mi mặc lòng mi chẳng rõ lòng ta!... Thôi giải tán đi, và cứ việc an cư lạc nghiệp trong hoà bình và trật tự! Ta không dám tự phụ là bậc anh hùng cứu quốc, nhưng ta phải tránh cho mi nạn chiến tranh rồi! Hoà bình vạn tuế!",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio3.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Southern man", audio: "assets/data/wav/audio3_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Central Bao Quoc (Male)", audio: "assets/data/wav/audio3_viettel.wav" }
    ]
  },
  {
    text: "Chiều 3 tháng 8, Thủ tướng Phạm Minh Chính và đoàn công tác tới thăm hỏi người dân chịu ảnh hưởng do mưa lũ tại các xã Na Son, Tìa Dình, Xa Dung của tỉnh Điện Biên. Ông động viên, tặng quà các gia đình bị thiệt hại do thiên tai, chia buồn cùng gia đình có người thân bị thiệt mạng.",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio4.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Southern woman", audio: "assets/data/wav/audio4_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Southern Diem My (Female)", audio: "assets/data/wav/audio4_viettel.wav" }
    ]
  },
  {
    text: "Trăm năm trong cõi người ta, Chữ tài chữ mệnh khéo là ghét nhau. Trải qua một cuộc bể dâu, Những điều trông thấy mà đau đớn lòng.",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio5.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Northern woman", audio: "assets/data/wav/audio5_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Central Mai Ngoc (Female)", audio: "assets/data/wav/audio5_viettel.wav" }
    ]
  },
  {
    text: "Sàng tiền minh nguyệt quang, Nghi thị địa thượng sương. Cử đầu vọng minh nguyệt, Đê đầu tư cố hương.",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio6.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Northern woman", audio: "assets/data/wav/audio6_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Northern Thanh Tung (Male)", audio: "assets/data/wav/audio6_viettel.wav" }
    ]
  },
  {
    text: "Từ là từ phu tướng. Bảo kiếm sắc phong lên đàng. Vào ra luống trông tin chàng. Năm canh mơ màng. Em luống trông tin chàng. Ôi gan vàng quặn đau í a",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio7.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Northern woman", audio: "assets/data/wav/audio7_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Southern Le Yen (Female)", audio: "assets/data/wav/audio7_viettel.wav" }
    ]
  },
  {
    text: "Chàng thì chạy cõi xa mưa gió, Thiếp thì về buồng cũ chiếu chăn. Đoái trông theo đã cách ngăn, Những màu mây biếc, cũng ngần núi xanh",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio8.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Southern woman 2", audio: "assets/data/wav/audio8_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Northern Thanh Ha (Female)", audio: "assets/data/wav/audio8_viettel.wav" }
    ]
  },
  {
    text: "Từ trên tàu bay mà nhìn xuống Sông Đà, không ai trong tàu bay nghĩ rằng cái dây thừng ngoằn ngoèo dưới chân mình kia lại chính là cái con sông hằng năm và đời đời kiếp kiếp làm mình làm mẩy với con người Tây Bắc và phản ứng giận dỗi vô tội vạ với người lái đò Sông Đà.",
    outputs: [
      { model: "VietSpeechLLM-TTS", speaker: "Random", audio: "assets/data/wav/audio9.wav" },
      { model: "Industrial Zalo AI TTS", speaker: "Southern man", audio: "assets/data/wav/audio9_zalo.wav" },
      { model: "Industrial Viettel AI TTS", speaker: "Northern Tien Quan (Male)", audio: "assets/data/wav/audio9_viettel.wav" }
    ]
  }
];


// Inject sample entries into the page
function loadSamples() {
  const sampleList = document.getElementById('sample-list');
  sampleList.innerHTML = '';

  samples.forEach(sample => {
    const container = document.createElement('div');
    container.className = 'sample-comparison';

    // Create header row with text
    const textRow = document.createElement('div');
    textRow.className = 'sample-text';
    textRow.innerHTML = `<strong>Text:</strong> ${sample.text}`;
    container.appendChild(textRow);

    // Create comparison row
    const comparisonRow = document.createElement('div');
    comparisonRow.className = 'comparison-row';

    sample.outputs.forEach(output => {
      const col = document.createElement('div');
      col.className = 'comparison-column';

      const modelP = document.createElement('p');
      modelP.className = 'model';
      modelP.textContent = `Model: ${output.model}`;

      const speakerP = document.createElement('p');
      speakerP.className = 'speaker';
      speakerP.textContent = `Speaker: ${output.speaker}`;

      const audio = document.createElement('audio');
      audio.controls = true;
      audio.src = output.audio;

      col.appendChild(modelP);
      col.appendChild(speakerP);
      col.appendChild(audio);
      comparisonRow.appendChild(col);
    });

    container.appendChild(comparisonRow);
    sampleList.appendChild(container);
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
