
/*korg delta
roland juno 6
roland rs-09
moog little phatty
yamaha dx7 ii
korg poly 800 ii
korg microkorg
korg ms-20 mini
casio vl-tone
casio mt200
omnichord
korg voltron

roland tr505
boss dr rhythm



*/ 
const SynthInfo = [
   { brand: "Korg",
    name: "Delta",
    image: "http://medias.audiofanzine.com/images/normal/korg-delta-1033840.jpg",
    year: "1979 - 1984",
    description: "Korg's Delta is an analog semi-poly synth/string machine, basically a slimmed down version of the Korg Trident. Though limited in the range of sounds compared with other synths of the same genre, the sheer quality of the sound from this little beastie really does make it something of a marvel. It can be found used for cheap and is worth it for the retro synth strings and fat bass synth tones.",
    ownership: true,
    price: 350,
    role: "Polyphonic"
    },
    {    
    brand: "Roland",
    name: "Juno 6",
    image: "https://cdn.synthlib.com/instruments/images/2_1445981344/juno60_medium.png",
    year: "1982",
    description: "The first in a series of amazingly affordable quality synthesizers from Roland's amazing Juno family! The Juno-6 is a six voice polyphonic analog synthesizer! It's a very stable synth thanks to its digitally controlled analog oscillators. The Juno-6 sounds great, however it lacks basic necessities like MIDI control and patch memory storage.",
    ownership: true,
    price: 650,
    role: "Polyphonic"},
    {    
    brand: "Korg",
    name: "MS-20 Mini",
    image: "http://cdn.korg.com/us/products/upload/13d6c3ef29f428d6df620c7e7b063c49_pc.png?Expires=1494453585&Signature=EMNUA9C8crmDQfkkwWyyNfp2CLNRbKhXgCbaDc6tr2ACZej8pk87epnvRsKzPj~5drEv7N5NtQQ418JBHIVxOQs4ixavAa9sIbSDCIrjgMTk8iJNJvkLECxIIrinF~aoL9ov41S~CZ8rIeXhxtvl2JIZqw1rjcY03pLtPcoOicfUaTvp4tP9JFubhe-l2jylwSzEw0KIZY72ee6WdKgUev39vcN2m38seiOAKD3PZWvRqtecI5UfhhafUhinbis0Q1k9YEn5BAtPfLoFXGpXIYcuWqX1A3n0uO7FRAXVIelxxHHHEFcfDy1KVFlRzTwIM~X9ewBnnTFTy39GuHMlag__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2013",
    description: "The MS-20 mini has the exact same synthesis as the original: two analog oscillators with ring modulation, and envelope generators with delay and hold. The VCA (Voltage Controlled Amp) maintains the original basic design, but has been modified to produce less noise.",
    ownership: true,
    price: 400,
    role: "Monophonic"},
    {    
    brand: "Korg",
    name: "MicroKorg",
    image: "http://cdn.korg.com/caen/products/upload/89332a455c0a95748fbdcfc41d9fa87d_pc.png?Expires=1494436020&Signature=ipnJJGjZutfd9TzrzligLSrSASW3Ka4cqBq2YmmIAGVsCQ1bqoajwS~iorIL7uo47-0K7-ELm7a9rAnnPCNr5S0DSMUmOeixaN-JLLH8ItO6BGZ-acJTO0Sg1GDKahupq1TD67-TtaHnVRLIExZpnfZ9RldPDDrdsf5bul1lNxShs5qjAIRJc2I1jPilyisgrLaSTGQH0oL1bUQJvXepI3LDae8RnILd0otdw6WH8EkJ~c2q0OtpTh~bbG85OiDsAV2karyUax8UHe-c-wYoTkZwJYlxjIs7ErfJhkUELgWC5ICpwAykOZQLPfdzyzyeeCXGh7FotFCetzN~wTpuRQ__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2002",
    description: "An MS2000 in sheep's clothing. The microKorg is a very cool and retro-looking version of the MS2000 analog modeling synthesizer. This compact keyboard is designed for portability and can run on batteries! But inside the microKorg is the exact same synthesis engine and sounds found in the killer MS2000 and MS2000R synths!",
    ownership: true,
    price: 275,
    role: "Polyphonic"},
    {    
    brand: "Korg",
    name: "Poly 800 II",
    image: "https://discogslabs.imgix.net/gear/572c0384fb36530016a63976.jpg?s=66ab9c9737a5889f1b3258fe5555bd0f",
    year: "1983 - 1984",
    description: "The Poly-800 is an eight-voice instrument (two more than the Juno series) with 64 memory patches (half of what the Juno-106 offered) and up to 50 editable parameters! Like the Juno, the Poly-800 had one DCO per voice, although it did feature a Double mode in which the oscillators could be stacked up for a fuller sound and only four voices of polyphony. ",
    ownership: true,
    price: 250,
    role: "Polyphonic"},
    {    
    brand: "Moog",
    name: "Little Phatty",
    image: "https://www.backlinerent.de/s/cc_images/cache_2364958.png?t=1488964533",
    year: "2007",
    description: "The Little Phatty boasts a 100 percent analog signal path, 100 user editable presets and a 37-note keyboard. It is a monophonic synth with two oscillators (the Voyager has three osc). Waveform selector is continuously variable between waveforms (tri, saw, square, pulse) and there is oscillator-sync. The filter is the classic Moog ladder design. Two ADSR envelope generators are available for the volume and the filter. And finally a nice LFO with six waveshapes, four destinations and rate/depth controls helps to get things moving. The 'Master' section of the keyboard has controls for Tuning, +/-2 Octave Transpose, Glide, Pitch/Mod wheels and some data entry controls.",
    ownership: true,
    price: 1550,
    role: "Monophonic"},
    {
    brand: "Yamaha",
    name: "DX-7 II",
    image: "https://www.deepsignalstudios.com/sites/default/files/dx7.png",
    year: "1986 - 1989",
    description: "The DX7, a classic FM synth, gets a make-over with three significant updates. The updated models feature a more sturdy chassis with actual push-buttons replacing the cheaper and less reliable membrane buttons of the original DX7. The two real time sliders (that allow for control of user-programmable parameters in real time) are larger than before. Internally, the biggest improvement is the updated 16-bit digital circuitry for cleaner and much less noisy sound quality. Patch memory has also been doubled from 32 to 64 voices. ",
    ownership: true,
    price: 350,
    role: "Polyphonic"},
     {    
    brand: "Casio",
    name: "VL-Tone",
    image: "https://cdn.synthlib.com/instruments/images/5_1446043323/casio-vl-tone-angle_medium.png",
    year: "1979 - 1984",
    description: "The Casio VL-1 or VL-Tone as it's also called has 29 little calculator-type button keys, five preset and one user memory patches, built-in rhythm machine (waltz, swing, rock, samba, etc.) and a 100-note sequencer.",
    ownership: true,
    price: 50,
    role: "Monophonic"},
     {    
    brand: "Casio",
    name: "SK-1",
    image: "https://www.xlr8r.com/wp-content/uploads/files/casiosk1_020711.png",
    year: "1985",
    description: "This is the sort of sampler-toy you end up belching into with your friends and play burp-songs for a laugh! There are 11 built-in accompaniment-style drum patterns (disco, rock, samba, etc.) which are all embarrassingly fun and totally unusable. The keyboard uses mini plastic keys. It lacks MIDI, lacks effects, edit-ability, memory, and filtering. However there are 13 envelope shapes that can affect your sample or synth sounds somewhat. There is also portamento, vibrato, and chord accompaniment with the chord selector system.",
    ownership: true,
    price: 100,
    role: "Polyphonic"},
    {    
    brand: "Suzuki",
    name: "Omnichord",
    image: "http://www.suzukimusic.co.uk/omnichord-heaven/images/OM-27_overhead.png",
    year: "1981",
    description: "Omnichords often feature preset rhythms with a tempo control, which the player may use as accompaniment. Several models of the Omnichord were produced that added MIDI compatibility, a selection of voices for the touch plate, effects such as vibrato and sustain, and chord memory. Some Omnichord musicians will play the instrument as a keytar, by strapping the instrument on both ends and playing it as if it were an electric guitar.",
    ownership: true,
    price: 200,
    role: "Monophonic"},
    {
    brand: "Boss",
    name: "Dr. Rhythm",
    image: "http://i.ebayimg.com/00/s/NDgwWDY0MA==/z/LeEAAOSwax5YnbDn/$_1.JPG?set_id=880000500F",
    year: "1985",
    description: "The DR-220 derives from the earlier DR-110 (1983) without rotary controls but the same LCD 'matrix' display panel, a much simplified version of that used in devices such as the Roland TR-707.",
    ownership: true,
    price: 50,
    role: "Drum Machine"},
    {
    brand: "Roland",
    name: "TR-505",
    image: "http://cyberiaplanet.com/Studio/Images/Roland%20TR-505small.png",
    year: "1986",
    description: "A cheap (budget) drum machine. It features 16 drum tones which unfortunately, are only mediocre samples. Its memory contains 48 patterns and 6 songs. Unlike its TR cousins it does not have individual drum tone outputs. There is no drum tone editing capability either. It does however feature extensive MIDI implementation, even the pads will transmit MIDI data. The 505 works well with a computer and sequencer or as a stand alone drum machine.",
    ownership: true,
    price: 100,
    role: "Drum Machine"},
    {
    brand: "Korg",
    name: "Monotron",
    image: "http://cdn.korg.com/us/products/upload/ec52de7763f630daecd83349e3d08ea3_pc.png?Expires=1493875198&Signature=r3F6-wWaUbc6EhCLK2izxKE4G~jTNG5HENqFZ1DdrMvOtEaC7D4HX4mvbwCAJb3k7AMipgyP3WEX5JEVxTu5BX5S5KuQ-~-e~d~6Qxd9rgSD-b6Xknbhg1pMR4Os6rxsGQHo-VPDCDZoNUPfXFG8mhjGLoe2lFmS8w-RPsOf9Y5Y9OCaKHk3wAyYvUpRO1anexClSos8Rg04ecN0spo9DbCN53XxxPVDhTQeAPmvc3CpBVFrImTiY9prFikD-BagDFFrEY2m40rk1IPVLz~M0G5F~aNoU9xAxezWz3tOdeail5cqSmAfjCtWJPGd7P3LXiTpEGWoyqbhkMsK2DTVSw__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2010 - 2011",
    description: "The Monotron, released in 2010, is Korg's first foray into the world of analog synthesis in nearly thirty years. Marketed as the 'Go-Anywhere Analog,' the Monotron is roughly the size and shape of a cassette tape (for those of you who know what that is). At its core, the Monotron is a (very) basic, but fun, battery powered monophonic analog synthesizer. It has one voltage-controlled oscillator that produces a saw waveform, one voltage-controlled filter, and one LFO.",
    ownership: true,
    price: 70,
    role: "Monophonic"},
    {
    brand: "Roland",
    name: "RS-09",
    image: "http://3.bp.blogspot.com/-6ep4bcQk6DQ/VJY7QjwfsnI/AAAAAAAJMQg/2bvnmZRmwNE/s1600/2.jpg",
    year: "1979 - 1980",
    description: "The RS-09 is an analog string and organ synthesizer (similar to the Saturn-09 which only produced an organ sound). It's old, it's cheap and they're usually worth finding! The string sound and organ sounds are nice, fatty analog sounds. The organ and string sections can be played simultaneously or individually. An ensemble/chorus effect and external sound input are welcome features. But aside from all this, there isn't much else left to this synth. A simple 2-vco architecture with simple and limited editable parameters, no patch memory and a small keyboard.",
    ownership: true,
    price: 200,
    role: "Polyphonic"}
    ];
    
    /*
    ,
    {
    brand: "",
    name: "",
    image: "",
    year: "",
    description: "",
    ownership: true,
    price: 100,
    role: "Polyphonic"},
    {brand: "Korg",
    name: "Delta",
    image: "http://medias.audiofanzine.com/images/normal/korg-delta-1033840.jpg",
    year: "1979 - 1984",
    description: "Korg's Delta is an analog semi-poly synth/string machine, basically a slimmed down version of the Korg Trident. Though limited in the range of sounds compared with other synths of the same genre, the sheer quality of the sound from this little beastie really does make it something of a marvel. It can be found used for cheap and is worth it for the retro synth strings and fat bass synth tones.",
    ownership: true},
    {    
    brand: "Roland",
    name: "Juno 6",
    image: "https://cdn.synthlib.com/instruments/images/2_1445981344/juno60_medium.png",
    year: "1982",
    description: "The first in a series of amazingly affordable quality synthesizers from Roland's amazing Juno family! The Juno-6 is a six voice polyphonic analog synthesizer! It's a very stable synth thanks to its digitally controlled analog oscillators. The Juno-6 sounds great, however it lacks basic necessities like MIDI control and patch memory storage.",
    ownership: true},
    {    
    brand: "Korg",
    name: "MS-20 Mini",
    image: "http://cdn.korg.com/us/products/upload/13d6c3ef29f428d6df620c7e7b063c49_pc.png?Expires=1494453585&Signature=EMNUA9C8crmDQfkkwWyyNfp2CLNRbKhXgCbaDc6tr2ACZej8pk87epnvRsKzPj~5drEv7N5NtQQ418JBHIVxOQs4ixavAa9sIbSDCIrjgMTk8iJNJvkLECxIIrinF~aoL9ov41S~CZ8rIeXhxtvl2JIZqw1rjcY03pLtPcoOicfUaTvp4tP9JFubhe-l2jylwSzEw0KIZY72ee6WdKgUev39vcN2m38seiOAKD3PZWvRqtecI5UfhhafUhinbis0Q1k9YEn5BAtPfLoFXGpXIYcuWqX1A3n0uO7FRAXVIelxxHHHEFcfDy1KVFlRzTwIM~X9ewBnnTFTy39GuHMlag__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2013",
    description: "The MS-20 mini has the exact same synthesis as the original: two analog oscillators with ring modulation, and envelope generators with delay and hold. The VCA (Voltage Controlled Amp) maintains the original basic design, but has been modified to produce less noise.",
    ownership: true},
    {    
    brand: "Korg",
    name: "MicroKorg",
    image: "http://cdn.korg.com/caen/products/upload/89332a455c0a95748fbdcfc41d9fa87d_pc.png?Expires=1494436020&Signature=ipnJJGjZutfd9TzrzligLSrSASW3Ka4cqBq2YmmIAGVsCQ1bqoajwS~iorIL7uo47-0K7-ELm7a9rAnnPCNr5S0DSMUmOeixaN-JLLH8ItO6BGZ-acJTO0Sg1GDKahupq1TD67-TtaHnVRLIExZpnfZ9RldPDDrdsf5bul1lNxShs5qjAIRJc2I1jPilyisgrLaSTGQH0oL1bUQJvXepI3LDae8RnILd0otdw6WH8EkJ~c2q0OtpTh~bbG85OiDsAV2karyUax8UHe-c-wYoTkZwJYlxjIs7ErfJhkUELgWC5ICpwAykOZQLPfdzyzyeeCXGh7FotFCetzN~wTpuRQ__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2002",
    description: "An MS2000 in sheep's clothing. The microKorg is a very cool and retro-looking version of the MS2000 analog modeling synthesizer. This compact keyboard is designed for portability and can run on batteries! But inside the microKorg is the exact same synthesis engine and sounds found in the killer MS2000 and MS2000R synths!",
    ownership: true},
    {    
    brand: "Korg",
    name: "Poly 800 II",
    image: "https://discogslabs.imgix.net/gear/572c0384fb36530016a63976.jpg?s=66ab9c9737a5889f1b3258fe5555bd0f",
    year: "1983 - 1984",
    description: "The Poly-800 is an eight-voice instrument (two more than the Juno series) with 64 memory patches (half of what the Juno-106 offered) and up to 50 editable parameters! Like the Juno, the Poly-800 had one DCO per voice, although it did feature a Double mode in which the oscillators could be stacked up for a fuller sound and only four voices of polyphony. ",
    ownership: true},
    {    
    brand: "Moog",
    name: "Little Phatty",
    image: "http://static.wixstatic.com/media/ccabbe_c46563cd5f6248e78528a44d2e738241.png_srz_613_236_85_22_0.50_1.20_0.00_png_srz",
    year: "2007",
    description: "The Little Phatty boasts a 100 percent analog signal path, 100 user editable presets and a 37-note keyboard. It is a monophonic synth with two oscillators (the Voyager has three osc). Waveform selector is continuously variable between waveforms (tri, saw, square, pulse) and there is oscillator-sync. The filter is the classic Moog ladder design. Two ADSR envelope generators are available for the volume and the filter. And finally a nice LFO with six waveshapes, four destinations and rate/depth controls helps to get things moving. The 'Master' section of the keyboard has controls for Tuning, +/-2 Octave Transpose, Glide, Pitch/Mod wheels and some data entry controls.",
    ownership: true},
    { brand: "Korg",
    name: "Delta",
    image: "http://medias.audiofanzine.com/images/normal/korg-delta-1033840.jpg",
    year: "1979 - 1984",
    description: "Korg's Delta is an analog semi-poly synth/string machine, basically a slimmed down version of the Korg Trident. Though limited in the range of sounds compared with other synths of the same genre, the sheer quality of the sound from this little beastie really does make it something of a marvel. It can be found used for cheap and is worth it for the retro synth strings and fat bass synth tones.",
    ownership: true},
    {    
    brand: "Roland",
    name: "Juno 6",
    image: "https://cdn.synthlib.com/instruments/images/2_1445981344/juno60_medium.png",
    year: "1982",
    description: "The first in a series of amazingly affordable quality synthesizers from Roland's amazing Juno family! The Juno-6 is a six voice polyphonic analog synthesizer! It's a very stable synth thanks to its digitally controlled analog oscillators. The Juno-6 sounds great, however it lacks basic necessities like MIDI control and patch memory storage.",
    ownership: true},
    {    
    brand: "Korg",
    name: "MS-20 Mini",
    image: "http://cdn.korg.com/us/products/upload/13d6c3ef29f428d6df620c7e7b063c49_pc.png?Expires=1494453585&Signature=EMNUA9C8crmDQfkkwWyyNfp2CLNRbKhXgCbaDc6tr2ACZej8pk87epnvRsKzPj~5drEv7N5NtQQ418JBHIVxOQs4ixavAa9sIbSDCIrjgMTk8iJNJvkLECxIIrinF~aoL9ov41S~CZ8rIeXhxtvl2JIZqw1rjcY03pLtPcoOicfUaTvp4tP9JFubhe-l2jylwSzEw0KIZY72ee6WdKgUev39vcN2m38seiOAKD3PZWvRqtecI5UfhhafUhinbis0Q1k9YEn5BAtPfLoFXGpXIYcuWqX1A3n0uO7FRAXVIelxxHHHEFcfDy1KVFlRzTwIM~X9ewBnnTFTy39GuHMlag__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2013",
    description: "The MS-20 mini has the exact same synthesis as the original: two analog oscillators with ring modulation, and envelope generators with delay and hold. The VCA (Voltage Controlled Amp) maintains the original basic design, but has been modified to produce less noise.",
    ownership: true},
    {    
    brand: "Korg",
    name: "MicroKorg",
    image: "http://cdn.korg.com/caen/products/upload/89332a455c0a95748fbdcfc41d9fa87d_pc.png?Expires=1494436020&Signature=ipnJJGjZutfd9TzrzligLSrSASW3Ka4cqBq2YmmIAGVsCQ1bqoajwS~iorIL7uo47-0K7-ELm7a9rAnnPCNr5S0DSMUmOeixaN-JLLH8ItO6BGZ-acJTO0Sg1GDKahupq1TD67-TtaHnVRLIExZpnfZ9RldPDDrdsf5bul1lNxShs5qjAIRJc2I1jPilyisgrLaSTGQH0oL1bUQJvXepI3LDae8RnILd0otdw6WH8EkJ~c2q0OtpTh~bbG85OiDsAV2karyUax8UHe-c-wYoTkZwJYlxjIs7ErfJhkUELgWC5ICpwAykOZQLPfdzyzyeeCXGh7FotFCetzN~wTpuRQ__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2002",
    description: "An MS2000 in sheep's clothing. The microKorg is a very cool and retro-looking version of the MS2000 analog modeling synthesizer. This compact keyboard is designed for portability and can run on batteries! But inside the microKorg is the exact same synthesis engine and sounds found in the killer MS2000 and MS2000R synths!",
    ownership: true},
    {    
    brand: "Korg",
    name: "Poly 800 II",
    image: "https://discogslabs.imgix.net/gear/572c0384fb36530016a63976.jpg?s=66ab9c9737a5889f1b3258fe5555bd0f",
    year: "1983 - 1984",
    description: "The Poly-800 is an eight-voice instrument (two more than the Juno series) with 64 memory patches (half of what the Juno-106 offered) and up to 50 editable parameters! Like the Juno, the Poly-800 had one DCO per voice, although it did feature a Double mode in which the oscillators could be stacked up for a fuller sound and only four voices of polyphony. ",
    ownership: true},
    {    
    brand: "Moog",
    name: "Little Phatty",
    image: "http://static.wixstatic.com/media/ccabbe_c46563cd5f6248e78528a44d2e738241.png_srz_613_236_85_22_0.50_1.20_0.00_png_srz",
    year: "2007",
    description: "The Little Phatty boasts a 100 percent analog signal path, 100 user editable presets and a 37-note keyboard. It is a monophonic synth with two oscillators (the Voyager has three osc). Waveform selector is continuously variable between waveforms (tri, saw, square, pulse) and there is oscillator-sync. The filter is the classic Moog ladder design. Two ADSR envelope generators are available for the volume and the filter. And finally a nice LFO with six waveshapes, four destinations and rate/depth controls helps to get things moving. The 'Master' section of the keyboard has controls for Tuning, +/-2 Octave Transpose, Glide, Pitch/Mod wheels and some data entry controls.",
    ownership: true},
    {brand: "Korg",
    name: "Delta",
    image: "http://medias.audiofanzine.com/images/normal/korg-delta-1033840.jpg",
    year: "1979 - 1984",
    description: "Korg's Delta is an analog semi-poly synth/string machine, basically a slimmed down version of the Korg Trident. Though limited in the range of sounds compared with other synths of the same genre, the sheer quality of the sound from this little beastie really does make it something of a marvel. It can be found used for cheap and is worth it for the retro synth strings and fat bass synth tones.",
    ownership: true},
    {    
    brand: "Roland",
    name: "Juno 6",
    image: "https://cdn.synthlib.com/instruments/images/2_1445981344/juno60_medium.png",
    year: "1982",
    description: "The first in a series of amazingly affordable quality synthesizers from Roland's amazing Juno family! The Juno-6 is a six voice polyphonic analog synthesizer! It's a very stable synth thanks to its digitally controlled analog oscillators. The Juno-6 sounds great, however it lacks basic necessities like MIDI control and patch memory storage.",
    ownership: true},
    {    
    brand: "Korg",
    name: "MS-20 Mini",
    image: "http://cdn.korg.com/us/products/upload/13d6c3ef29f428d6df620c7e7b063c49_pc.png?Expires=1494453585&Signature=EMNUA9C8crmDQfkkwWyyNfp2CLNRbKhXgCbaDc6tr2ACZej8pk87epnvRsKzPj~5drEv7N5NtQQ418JBHIVxOQs4ixavAa9sIbSDCIrjgMTk8iJNJvkLECxIIrinF~aoL9ov41S~CZ8rIeXhxtvl2JIZqw1rjcY03pLtPcoOicfUaTvp4tP9JFubhe-l2jylwSzEw0KIZY72ee6WdKgUev39vcN2m38seiOAKD3PZWvRqtecI5UfhhafUhinbis0Q1k9YEn5BAtPfLoFXGpXIYcuWqX1A3n0uO7FRAXVIelxxHHHEFcfDy1KVFlRzTwIM~X9ewBnnTFTy39GuHMlag__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2013",
    description: "The MS-20 mini has the exact same synthesis as the original: two analog oscillators with ring modulation, and envelope generators with delay and hold. The VCA (Voltage Controlled Amp) maintains the original basic design, but has been modified to produce less noise.",
    ownership: true},
    {    
    brand: "Korg",
    name: "MicroKorg",
    image: "http://cdn.korg.com/caen/products/upload/89332a455c0a95748fbdcfc41d9fa87d_pc.png?Expires=1494436020&Signature=ipnJJGjZutfd9TzrzligLSrSASW3Ka4cqBq2YmmIAGVsCQ1bqoajwS~iorIL7uo47-0K7-ELm7a9rAnnPCNr5S0DSMUmOeixaN-JLLH8ItO6BGZ-acJTO0Sg1GDKahupq1TD67-TtaHnVRLIExZpnfZ9RldPDDrdsf5bul1lNxShs5qjAIRJc2I1jPilyisgrLaSTGQH0oL1bUQJvXepI3LDae8RnILd0otdw6WH8EkJ~c2q0OtpTh~bbG85OiDsAV2karyUax8UHe-c-wYoTkZwJYlxjIs7ErfJhkUELgWC5ICpwAykOZQLPfdzyzyeeCXGh7FotFCetzN~wTpuRQ__&Key-Pair-Id=APKAIQGL3XAA7HGZGU6Q",
    year: "2002",
    description: "An MS2000 in sheep's clothing. The microKorg is a very cool and retro-looking version of the MS2000 analog modeling synthesizer. This compact keyboard is designed for portability and can run on batteries! But inside the microKorg is the exact same synthesis engine and sounds found in the killer MS2000 and MS2000R synths!",
    ownership: true},
    {    
    brand: "Korg",
    name: "Poly 800 II",
    image: "https://discogslabs.imgix.net/gear/572c0384fb36530016a63976.jpg?s=66ab9c9737a5889f1b3258fe5555bd0f",
    year: "1983 - 1984",
    description: "The Poly-800 is an eight-voice instrument (two more than the Juno series) with 64 memory patches (half of what the Juno-106 offered) and up to 50 editable parameters! Like the Juno, the Poly-800 had one DCO per voice, although it did feature a Double mode in which the oscillators could be stacked up for a fuller sound and only four voices of polyphony. ",
    ownership: true},
    {    
    brand: "Moog",
    name: "Little Phatty",
    image: "http://static.wixstatic.com/media/ccabbe_c46563cd5f6248e78528a44d2e738241.png_srz_613_236_85_22_0.50_1.20_0.00_png_srz",
    year: "2007",
    description: "The Little Phatty boasts a 100 percent analog signal path, 100 user editable presets and a 37-note keyboard. It is a monophonic synth with two oscillators (the Voyager has three osc). Waveform selector is continuously variable between waveforms (tri, saw, square, pulse) and there is oscillator-sync. The filter is the classic Moog ladder design. Two ADSR envelope generators are available for the volume and the filter. And finally a nice LFO with six waveshapes, four destinations and rate/depth controls helps to get things moving. The 'Master' section of the keyboard has controls for Tuning, +/-2 Octave Transpose, Glide, Pitch/Mod wheels and some data entry controls.",
    ownership: true}
];*/

export default SynthInfo;