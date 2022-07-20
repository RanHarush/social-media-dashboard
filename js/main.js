let switchInput = document.getElementById("switchInput");
let root = document.documentElement;

const color = [
  [
    "hsl(230, 17%, 14%)",
    "hsl(232, 19%, 15%)",
    "hsl(228, 28%, 20%)",
    "hsl(228, 34%, 66%)",
    "hsl(0, 0%, 100%)",
  ],
  [
    "hsl(0, 0%, 100%)",
    "hsl(225, 100%, 98%)",
    "hsl(227, 47%, 96%)",
    "hsl(228, 12%, 44%)",
    "hsl(230, 17%, 14%)",
  ],
];

const changeThemeColor = (a) => {
  for (let i = 0; i < color[a].length; i++) {
    root.style.setProperty(`--color-${i}`, color[a][i]);
  }
};

changeThemeColor(switchInput.value);

const inputValueSwitch = () => {
  changeThemeColor(switchInput.value);
};
