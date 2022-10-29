const TodaysDate = () => (
  <div>{`Today's date is ${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`}</div>
);
export default TodaysDate;
