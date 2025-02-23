import React from "react";

type LogAreaProps = {
  copyOnClickHandler: () => void;
  isCopied: boolean;
  logData: string[];
};

export function LogArea({ copyOnClickHandler, isCopied, logData }) {
  return (
    <div className="relative flex flex-col gap-2">
      <button
        className="btn-primary btn-xs btn absolute right-2 top-10 z-10"
        onClick={copyOnClickHandler}>
        {isCopied ? <span>Copied 📋</span> : <span>Copy 📋</span>}
      </button>
      <p className="text-sm font-medium">LOGS</p>
      <code className="rounded-btn relative flex h-52 max-h-52 flex-col gap-3 overflow-y-auto break-all bg-base-200 p-4 text-xs">
        {logData.length === 0 && (
          <p className="text-base-content/70">No logs to show</p>
        )}

        {logData.map((logLine: any) => {
          console.log(logData);
          return <p className="">{logLine}</p>;
        })}
      </code>
    </div>
  );
}
