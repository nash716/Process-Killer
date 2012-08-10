all:
	cp src/popup.html bin/popup.html
	cp src/popup.css bin/css/popup.css
	cat src/wrapper.js src/execute.js src/main.js > bin/js/popup.js