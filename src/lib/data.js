export const fetchPortfolioData = async () => {
  const URL = process.env.JSON_URL;

  try {
    const response = await fetch(
      URL,

      { next: { revalidate: 120 } }
    );
    if (!response.ok) {
      console.log(response);
      throw new Error(response);
    }
    const { user } = await response.json();
    return user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
