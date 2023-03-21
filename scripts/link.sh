if [ -L /usr/local/bin/rq ]; then
	rm /usr/local/bin/rq
fi
chmod +x request
chown -R $(whoami) request
ln -s "$(pwd)/request" /usr/local/bin/rq