

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
    role: "Monophonic"}
    ];
    
    /*,
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