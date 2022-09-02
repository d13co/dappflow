import {A_Arc} from "../arc-portal/types";

export function getArcs(): A_Arc[] {
    return [{
        id: 3,
        name: 'ARC-0003',
        markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0003.md',
        markdown: '',
        github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md',
        hasWorkspace: true
    },
        {
            id: 69,
            name: 'ARC-0069',
            markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0069.md',
            markdown: '',
            github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0069.md',
            hasWorkspace: true
        },
        {
            id: 19,
            name: 'ARC-0019',
            markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0019.md',
            markdown: '',
            github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md',
            hasWorkspace: true
        },
        {
            id: 16,
            name: 'ARC-0016',
            markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0016.md',
            markdown: '',
            github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0016.md',
            hasWorkspace: false
        },
        {
            id: 4,
            name: 'ARC-0004',
            markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0004.md',
            markdown: '',
            github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md',
            hasWorkspace: false
        },
        {
            id: 21,
            name: 'ARC-0021',
            markdownUrl: 'https://raw.githubusercontent.com/algorandfoundation/ARCs/main/ARCs/arc-0021.md',
            markdown: '',
            github: 'https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0021.md',
            hasWorkspace: true
        }
        ];
}

export function getArc(id: number): A_Arc {
    let arc;
    const arcs = getArcs();

    arcs.forEach((currentArc) => {
        if (currentArc.id === id) {
            arc = currentArc;
        }
    });

    return arc;
}

export const IPFS_GATEWAY = 'https://ipfs.io/ipfs';