import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { ModalContext } from "../App";
import { useContext } from "react";

export default function SuccessAlert() {
  const { successAlertText, setSuccessAlertText } = useContext(ModalContext);
  if (!successAlertText) {
    return "";
  }
  return (
    <div className="rounded-md w-64 bg-green-50 p-4 absolute top-5 right-5">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            {successAlertText || ""}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              onClick={() => setSuccessAlertText('')}
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
