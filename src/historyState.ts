import { SetStateAction, useEffect, useState, useCallback } from "react";

export default function useHistoryState(name: string, defaultValue: string) {
  type valueType = typeof defaultValue;
  type setNewValueType = valueType | SetStateAction<valueType>;
  const [value, setValue] = useState(
    getCurrentURLSearchParams().get(name) ?? defaultValue
  );

  const push = useCallback(
    (newValue: setNewValueType) => {
      setValue((oldValue) => {
        const _newValue =
          typeof newValue === "function" ? newValue(oldValue) : newValue;
        const param = getCurrentURLSearchParams();
        param.set(name, _newValue);
        history.pushState(
          Object.fromEntries(param.entries()),
          "",
          getNewUrl(param)
        );
        return _newValue;
      });
    },
    [name]
  );

  const replace = useCallback(
    (newValue: setNewValueType) => {
      setValue((oldValue) => {
        const _newValue =
          typeof newValue === "function" ? newValue(oldValue) : newValue;
        const param = getCurrentURLSearchParams();
        param.set(name, _newValue);
        history.replaceState(
          Object.fromEntries(param.entries()),
          "",
          getNewUrl(param)
        );
        return _newValue;
      });
    },
    [name]
  );

  useEffect(() => {
    const onPopState = (event: PopStateEvent) => {
      const newValue =
        event.state?.[name] ?? getCurrentURLSearchParams().get(name);
      if (newValue !== null && newValue !== undefined) setValue(newValue);
    };
    addEventListener("popstate", onPopState);
    return () => removeEventListener("popstate", onPopState);
  }, [name]);

  return [value, push, replace] as const;
}

function getCurrentURLSearchParams() {
  return new URLSearchParams(window.location.search);
}

function getUrl() {
  return (
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname
  );
}

function getNewUrl(params: URLSearchParams) {
  return getUrl() + "?" + params.toString();
}
