
export default function CustomIconComp({ children }: {children: string}) {
    return (
        <img src={children} alt="icon" width={'100%'} height={'100%'} />
    )
}

{/* <svg><use href={`${pathIcon}#basket`}></use></svg> */}