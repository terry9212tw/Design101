import './cloud.css'

function CloudPane() {
  return (
    <div className="cloudPane">
            <div className="stars">
            {[...Array(22)].map((_, index) => {
                const isIdStar = index % 2 === 0;
                const id = isIdStar ? `star${index / 2 + 1}` : '';
                return <div key={index} className="star" id={id} />;
            })}
            </div>

            {/* <div className="bigCloud" id="cloud1">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div> */}
            <div className="bigCloud" id="cloud2">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud3">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud4">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud5">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud6">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>

            <div className="bigCloud" id="cloud7">
                <div className="largeCircle" id="circ1">
                    <div className="largeCircle" id="circ1shadow"></div>
                </div>
                <div className="middleCircle" id="circ2">
                    <div className="middleCircle" id="circ2shadow"></div>
                </div>
                <div className="middleCircle" id="circ3">
                    <div className="middleCircle" id="circ3shadow"></div>
                </div>
                <div className="smallCircle" id="circ4"></div>
                <div className="smallCircle" id="circ5">
                    <div className="smallCircle" id="circ5shadow"></div>
                </div>
                <div className="smallCircle" id="circ6">
                    <div className="smallCircle" id="circ6shadow"></div>
                </div>
            </div>
        </div>
  );
};

export default CloudPane;