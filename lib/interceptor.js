/* jslint node: true, esnext: true */
"use strict";

const Interceptor = require('kronos-interceptor').Interceptor;
const parserFactory = require('./line-tokenizer');

/**
 * This interceptor cares about the handling of the messages.
 * It will add the hops and copies the messages
 */
class LineHeaderInterceptor extends Interceptor {

	constructor(endpoint, config) {
		super(endpoint, config);

		this.streamFilter = parserFactory(config, true);
	}

	static get type() {
		return "line-tokenizer-csv";
	}

	get type() {
		return "line-tokenizer-csv";
	}

	receive(request, oldRequest) {
		if (request.payload) {
			const stream = request.payload;
			request.payload = stream.pipe(this.streamFilter);
		}
		return this.connected.receive(request, oldRequest);
	}
}

exports.Interceptor = LineHeaderInterceptor;
