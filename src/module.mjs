import LineTokenizerInterceptor from "./line-tokenizer-interceptor.mjs";
import { parserFactory } from "./line-tokenizer.mjs";

function registerWithManager(manager) {
  return manager.registerInterceptor(LineTokenizerInterceptor);
}

export { parserFactory, LineTokenizerInterceptor, registerWithManager };
