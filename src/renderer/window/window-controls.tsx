import classNames from 'classnames';
import React from 'react';
import useIpc from '@renderer/core/ipc/use-ipc';

type Props = {
  platform: string;
  tooltips?: boolean;
};

const WindowControls: React.FC<Props> = (props) => {
  const { titlebar } = useIpc();

  return (
    <section
      className={classNames(
        'window-titlebar-controls',
        `type-${props.platform}`,
      )}
    >
      <div
        className='control minimize'
        onClick={() => titlebar.minimize()}
        title={props.tooltips ? 'Minimize' : null}
      >
        ─
      </div>
      <div
        className='control close'
        onClick={() => titlebar.exit()}
        title={props.tooltips ? 'Close' : null}
      >
        X
      </div>
    </section>
  );
};

export default WindowControls;
