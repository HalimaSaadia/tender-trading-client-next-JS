// Formatting date
export const formatDate = (dateString, boolean) => {
    const opts = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const opts1 = {
      day: "2-digit",
      month: "short",
    };
    let formattedDate;
    if (boolean) {
      formattedDate = new Date(dateString).toLocaleDateString("en-GB", opts);
    } else {
      formattedDate = new Date(dateString).toLocaleDateString("en-GB", opts1);
    }
    return formattedDate;
  };
  