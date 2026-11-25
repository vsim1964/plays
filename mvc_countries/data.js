export async function loadData() {
  const answer = await fetch("countries.json");
  const data = await answer.json();
  console.log("[DATA] JSON получен:", data);
}
