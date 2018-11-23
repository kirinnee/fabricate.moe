import {RuleSetRule, RuleSetUseItem} from "webpack";

/*===================
 STYLE LOADER
 ===================== */
let preCSSLoaders: RuleSetUseItem[] = [{
	loader: 'postcss-loader', options: {config: {path: `${__dirname}/postcss.config.js`}}
}, "sass-loader"];

let use: RuleSetUseItem[] = ["style-loader", {loader: "css-loader", options: {importLoaders: preCSSLoaders.length}}];

let cssRule: RuleSetRule = {
	test: /\.s?css/, use: use.concat(preCSSLoaders)
};


/*===================
 TS LOADER
 ===================== */

let uses: RuleSetUseItem[] = [{loader: 'ts-loader'}];

let scripts: RuleSetRule = {
	test: /\.tsx?$/, exclude: /(node_modules|bower_components)/, use: uses
};

let rules: RuleSetRule[] = [scripts, cssRule];

export {rules};
