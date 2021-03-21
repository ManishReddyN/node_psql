import https from "k6/http";
import { check } from "k6";
export default function () {
  var url = "http://solmon.photonnext.com/login";

  var payload = JSON.stringify({
    email: "palnadu@photonnext.com",
    password: "Palnadu#369",
  });
  var params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = https.post(url, payload, params);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
}
