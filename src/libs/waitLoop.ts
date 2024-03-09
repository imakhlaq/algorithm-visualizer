const wait = async (speed: number) => {
  const waitPromise = new Promise<void>((resolve) => {
    setTimeout(resolve, speed);
  });

  await waitPromise;
};

export default wait;
