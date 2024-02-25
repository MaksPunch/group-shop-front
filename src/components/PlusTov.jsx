import "../index.css"
export default function PlusTov() {
    document.querySelectorAll('.count .plus').forEach(item => {

        item.addEventListener('click', function () {

            ++item.parentElement.querySelector('input').value;

            if (item.parentElement.querySelector('input').value > 1) {

                item.parentElement.querySelector('.minus').classList.remove('min');

            }

        });

    });

    document.querySelectorAll('.count .minus').forEach(item => {

        item.addEventListener('click', function () {

            --item.parentElement.querySelector('input').value;

            if (item.parentElement.querySelector('input').value < 2) {

                item.parentElement.querySelector('input').value = 1

                item.classList.add('min');

            }

        });

    });
    return <>
        <div className="plusTov">
            <span class="change minus min">
                <span>-</span>
            </span>
            <input className="input-plus" type="text" name="productСount" value="1" disabled=""></input>
            <span class="change plus">
                <span>+</span>
            </span>
        </div>
    </>;
}