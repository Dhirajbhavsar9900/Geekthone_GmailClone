let obj = [
  {
    name: "Geekster",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Tata",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Bright",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
  {
    name: "Dhiraj",
    spantext: "lorem ipsum dolor sit amet",
    text: "lorem Ipsum dolor sit amet d portrait tempor inv sapien sed diam nonumy eirmod tempor invesi ut aliquy del",
    time: "12:01 pm",
  },
];

function plusLabel(obj) {
  let p = document.createElement("div");
  p.className = "inbox-message-item message-default-unread";

  p.innerHTML = `
            <div class="checkbox" style="margin-right: -12px;">
                <button class="btn">
                    <img src="./app/assets/icons/check_box_outline_blank_black_24dp.svg" alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon">
                </button>
            </div>
            <div class="message-group-hidden">
                <button class="btn-alt btn-nofill drag-indicator">
                    <img src="./app/assets/icons/drag_indicator_black_24dp.svg" alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled">
                </button>
            </div>
            <div>
                <button class="btn star" style="margin: 0;">
                    <img src="./app/assets/icons/star_border_black_24dp.svg" alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon">
                </button>
            </div>
            <div class="message-default">
                <div class="message-sender message-content">
                    <span>${obj.name}</span>
                </div>
                <div class="message-subject message-content">
                    <span>${obj.spantext}</span>
                </div>
                <div class="message-seperator message-content"> - </div>
                <div class="message-body message-content">
                    <span>${obj.text}</span>
                </div>
                <div class="gap message-content"> &nbsp; </div>
                <div class="message-date center-text">
                    <span>${obj.time}</span>
                </div>
            </div>
            <div class="message-group-hidden">
                <div class="inbox-message-item-options">
                    <button class="btn">
                        <img src="./app/assets/icons/archive_black_24dp.svg" alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover">
                    </button>
                    <button class="btn">
                        <img src="./app/assets/icons/delete_black_24dp.svg" alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover">
                    </button>
                    <button class="btn">
                        <img src="./app/assets/icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover">
                    </button>
                    <button class="btn">
                        <img src="./app/assets/icons/access_time_filled_black_24dp.svg" alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover">
                    </button>
                </div>
            </div>
        `;

  // Find the div with id 'pluslab'
  let pluslab = document.getElementById("mailss");

  // Append the newly created div 'p' to the 'pluslab' div
  pluslab.appendChild(p);
}

// Iterate over the obj array and call plusLabel() for each object
obj.forEach((objItem) => {
  plusLabel(objItem);
});
