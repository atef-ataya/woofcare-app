import { call, put, takeEvery } from "redux-saga/effects";
import request from "../utils/reuquest";
import { dataLoaded, dataLoadingError, loadData } from "./slice";

// example request
function* fetchDataSaga() {
  const requestURL = "https://randomuser.me/api/?results=100";
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = yield call(request, requestURL, options);
    yield put(dataLoaded(response.results));
  } catch (e) {
    yield put(dataLoadingError());
    window.alert(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(loadData.type, fetchDataSaga);
}
