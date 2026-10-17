(function () {
        let recentColors = [];

        const sidebar = document.createElement('div');
        sidebar.id = 'left-sidebar-container';

        Object.assign(sidebar.style, {
            position: 'fixed',
            left: '0px',
            top: '0px',
            width: '39.855px',
            height: '100%',
            minHeight: '535px',
            backgroundColor: '#000000',
            color: '#ffffff',
            zIndex: '99999',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            boxSizing: 'border-box',
            userSelect: 'none',
            '-webkit-tap-highlight-color': 'transparent'
        });

        const tools = [
            { name: '色碼庫', action: openColorPalette },
            { name: '設定', action: () => alert('點擊了設定') },
            { name: 'tool3', action: () => {} },
            { name: 'tool4', action: () => {} },
            { name: 'tool5', action: () => {} },
            { name: 'tool6', action: () => {} }
        ];

        tools.forEach((t) => {
            const btn = document.createElement('div');
            btn.innerText = t.name;
            Object.assign(btn.style, {
                width: '30px',
                height: '65px',
                backgroundColor: '#6c6c6c',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 'bold',
                textAlign: 'center',
                writingMode: 'vertical-lr',
                letterSpacing: '1px',
                cursor: 'pointer',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxSizing: 'border-box',
                transition: 'background-color 0.15s, color 0.15s',
                '-webkit-tap-highlight-color': 'transparent'
            });

            const light = document.createElement('div');
            light.className = 'indicator-light';
            Object.assign(light.style, {
                position: 'absolute',
                bottom: '4px',
                width: '6px',
                height: '6px',
                backgroundColor: '#222222',
                borderRadius: '50%',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)',
                transition: 'background-color 0.15s, box-shadow 0.15s'
            });
            btn.appendChild(light);

            btn.onclick = (e) => {
                e.stopPropagation();
                document.querySelectorAll('#left-sidebar-container > div').forEach(b => {
                    b.style.backgroundColor = '#6c6c6c';
                    b.style.color = '#ffffff';
                    const l = b.querySelector('.indicator-light');
                    if (l) {
                        l.style.backgroundColor = '#222222';
                        l.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.5)';
                    }
                });
                btn.style.backgroundColor = '#4e9a06';
                light.style.backgroundColor = '#00ff00';
                light.style.boxShadow = '0 0 6px #00ff00, inset 0 1px 2px rgba(0,0,0,0.2)';
                t.action();
            };
            sidebar.appendChild(btn);
        });

        document.body.appendChild(sidebar);

        function openColorPalette() {
            closeModal();
            const mask = document.createElement('div');
            mask.id = 'color-modal-mask';
            Object.assign(mask.style, {
                position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.25)', zIndex: '100000'
            });

            const modal = document.createElement('div');
            Object.assign(modal.style, {
                position: 'fixed', left: '47px', top: '5px', width: '400px',
                backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 6px 24px rgba(0,0,0,0.5)',
                overflow: 'hidden', fontFamily: 'sans-serif', boxSizing: 'border-box'
            });

            const header = document.createElement('div');
            Object.assign(header.style, { display: 'flex', justifyContent: 'space-between', padding: '10px 14px' });
            header.innerHTML = '<b style="font-size:15px;color:#111">色碼庫</b>';
            
            const closeBtn = document.createElement('div');
            closeBtn.innerText = '✕';
            closeBtn.style.cursor = 'pointer';
            closeBtn.onclick = (e) => { e.stopPropagation(); closeModal(); };
            header.appendChild(closeBtn);
            modal.appendChild(header);

            const grid = document.createElement('div');
            Object.assign(grid.style, { display: 'grid', gridTemplateColumns: 'repeat(16, 1fr)', gap: '1px', padding: '10px', backgroundColor: '#fff' });
            
            for (let i = 0; i < 48; i++) {
                const cell = document.createElement('div');
                cell.style.width = '100%';
                cell.style.aspectRatio = '1';
                cell.style.backgroundColor = `hsl(${i * 8}, 80%, 60%)`;
                cell.style.cursor = 'pointer';
                cell.onclick = (e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(cell.style.backgroundColor);
                };
                grid.appendChild(cell);
            }
            modal.appendChild(grid);
            mask.appendChild(modal);
            document.body.appendChild(mask);
        }

        function closeModal() {
            const mask = document.getElementById('color-modal-mask');
            if (mask) mask.remove();
        }
    })();
    </script>
