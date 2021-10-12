interface info {
  title: string;
  description: string;
}

let form: HTMLElement = document.getElementById("form");
let result: HTMLElement = document.getElementById("result");
let arr: any[];
let data: any = { title: "dato 1", description: "es un buen dato" };

let pushData: any = () => (
  (arr = [data]),
  arr.map((x) => {
    result.innerText += `Titulo: ${x.title}\ndescripcion: ${x.description}\n\n`;
  })
);

let getData: any = (e) => {
  e.preventDefault();
  const { title, description } = e.target;
  arr.push((data = { title: title.value, description: description.value }));
  console.log(arr)
  
  pushData();
};

form.addEventListener("submit", getData);
pushData();
