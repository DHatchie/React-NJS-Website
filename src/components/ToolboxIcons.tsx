export const ToolboxIcon = ({
  component
}: {
  component: React.ElementType
}) => {
  const Component = component
  return (
    <>
      <svg className='hidden size-0'>
        <defs>
          <linearGradient id='toolbox-icon-gradient'>
            <stop offset='0%' stopColor='rgb(110 231 183)' />
            <stop offset='100%' stopColor='rgb(56 189 248)' />
          </linearGradient>
        </defs>
      </svg>
      <Component
        className='size-10'
        style={{ fill: "url(#toolbox-icon-gradient)" }}
      />
    </>
  )
}
