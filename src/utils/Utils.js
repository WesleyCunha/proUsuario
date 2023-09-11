class Utils {
  static formatDate(data) {
    return `${String(data.getDate()).padStart(2, "0")}/${String(
      data.getMonth()
    ).padStart(
      2,
      "0"
    )}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
  }

  static padStartNumber(values) {
    return String(values).padStart(2, "0");
  }
}
