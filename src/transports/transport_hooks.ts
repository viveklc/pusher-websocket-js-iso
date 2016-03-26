import URLScheme from "./url_scheme.ts";
import Socket from "../socket/socket.ts";

interface TransportHooks {
  file?: string;
  urls: URLScheme;
  handlesActivityChecks: boolean;
  supportsPing: boolean;
  isInitialized() : boolean;
  isSupported(environment?: any): boolean;
  getSocket(url : string, options?: any): Socket;
  beforeOpen?: Function;
}

export default TransportHooks;