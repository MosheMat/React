import React from 'react';

type FancyButtonProps = {
    label: string;
    onClick: () => void;
};

export class FancyButton extends React.Component<FancyButtonProps> {
    render() {
        return (
            <button onClick={this.props.onClick}>
                🌟 {this.props.label}
            </button>
        );
    }
}
