class DuckDuckGoSearch {
    getInfo() {
        return {
            id: 'duckduckgosearch',
            name: 'DuckDuckGo Search',
            blocks: [
                {
                    opcode: 'searchWeb',
                    blockType: 'reporter',
                    text: 'search web for [QUERY]',
                    arguments: {
                        QUERY: {
                            type: 'string',
                            defaultValue: 'Turbowarp'
                        }
                    }
                }
            ]
        };
    }

    searchWeb(args) {
        const query = args.QUERY;
        const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`;
        return fetch(url)
            .then(response => response.json())
            .then(data => data.AbstractText || 'No results found')
            .catch(error => `Error: ${error}`);
    }
}

Scratch.extensions.register(new DuckDuckGoSearch());
