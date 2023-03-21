if [ -L /usr/local/bin/rq-dev ]; then
	rm /usr/local/bin/rq-dev
fi
chmod +x request_dev.ts
chown -R $(whoami) request_dev.ts
ln -s "$(pwd)/request_dev.ts" /usr/local/bin/rq-dev