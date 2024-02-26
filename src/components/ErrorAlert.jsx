import { XMarkIcon } from "@heroicons/react/20/solid";
import { ModalContext } from "../App";
import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function ErrorAlert() {
  const { errorAlertText, setErrorAlertText } = useContext(ModalContext);
  if (!errorAlertText) {
    return "";
  }
  return (
    <div className="rounded-md w-64 bg-red-50 p-4 fixed top-5 right-5 z-10">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon
            className="h-5 w-5 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            {errorAlertText || ""}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-red-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              onClick={() => setErrorAlertText('')}
            >
              <span className="sr-only">Закрыть</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
