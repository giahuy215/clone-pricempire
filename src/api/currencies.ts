export default async function getCurrencies() {
  try {
    const response = await fetch("/src/assets/json/currencies.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching currencies:", error);
  }
}
