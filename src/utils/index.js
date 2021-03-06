export const insertFragmentTo = (parent, children) => {
	if (typeof children === 'string') {
		parent.insertAdjacentHTML('beforeend', children);
	} else if (Array.isArray(children)) {
		children.forEach(child => {
			(typeof child === 'string') ?
			parent.insertAdjacentHTML('beforeend', child):
				parent.append(child);
		});
	} else {
		parent.append(children);
	}

	return parent;
}

export const parseHTML = html => {
	const template = document.createElement('template');
	template.innerHTML = html.trim();

	return template.content;
};