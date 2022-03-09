export async function getTopPings(client) {
	let redisArr = [];
	const allKeys = await client.keys("*");
	for (let i = 0; i < allKeys.length; i++) {
		const redisObj = {};
		const currentKey = allKeys[i];
		const currentValue = await client.get(currentKey);
		redisObj["url"] = currentKey;
		redisObj["count"] = currentValue;
		redisArr.push(redisObj);
	}

	redisArr = redisArr.sort(function (a, b) {
		return parseInt(b.count) - parseInt(a.count);
	});

	return redisArr.slice(-6, -1);
}

export async function setData(client, key) {
	const myValue = await client.get(key);
	if (myValue == null) {
		await client.set(key, 1);
	} else {
		const myNumValue = parseInt(myValue);
		await client.set(key, myNumValue + 1);
	}
}
