const formatter = (text: string) => {
    const dateArray = text.split("-");
    const year = Number(dateArray[0]);
    const month = Number(dateArray[1]) - 1;
    if(dateArray.length == 1) return year.toString()
    const monthString = new Date(year, month).toLocaleString("default", {
      month: "long",
    });
    return `${monthString} ${year}`;
  };

const formatDate = (date: {
    start: string;
    end: string | null;
    present: boolean;
  }) => {
    
    if (date.present && date.end === null) {
      return `${formatter(date.start)} - Present`;
    }

    if(!date.present && date.end !== null) {
      return `${formatter(date.start)} - ${formatter(date.end)}`;
    }

    if(!date.present && date.end === null) {
      return `${formatter(date.start)}`;
    }

    return '';
  };

  export default formatDate;