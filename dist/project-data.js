// Curated from the local case studies and the owner's subsequent corrections.
// This is a private editorial draft. Never publish source paths, control packets, credentials or unverified performance claims.
window.PORTFOLIO_PROJECTS = [
  {
    id:'navy-target-ship', title:'Indian Navy target-ship remote control', group:'Marine & defence', period:'2021–2022', context:'Squadron · Indian Navy-related', status:'Demonstrated and deployed',
    lead:'An end-to-end rebuild of a target vessel’s remote-control system after the original electronics were damaged by seawater.',
    challenge:'The vessel had to be operated remotely during sea exercises. The original control package could not simply be replaced, so the available engine, steering, feedback and operator functions had to be understood and integrated into a new architecture.',
    contribution:'I investigated the existing engine interface, developed embedded control boards and firmware, designed a throttle mechanism with position feedback, integrated navigation and status signals, and built a ruggedized operator station and control interface. I also carried out bench, communication and integrated-system tests.',
    system:'The system joined onboard controllers, propulsion and steering interfaces, GPS/status acquisition, a long-range communication link and a PC-based remote console. This public description deliberately omits packet formats, identifiers and operational procedures.',
    outcome:'The vessel was demonstrated before Indian Navy personnel and tested offshore. I also trained operators. The owner reports later duplication of the design, but fleet-specific figures are withheld pending publication review.',
    note:'Use only approved vessel photographs, interface screenshots and trial footage. Do not publish source code or operational communication details.'
  },
  {
    id:'navy-eot', title:'Marine engine-order telegraph electronics', group:'Marine & defence', period:'Date to confirm', context:'Squadron · Navy-related', status:'Hardware documented',
    lead:'Command-and-acknowledgement electronics for communication between two marine operator stations.',
    challenge:'The interface had to present an engine order at one station, convey it to a second station and show acknowledgement clearly to the operators. It was not the propulsion controller itself.',
    contribution:'I designed the 24 V input and regulated low-voltage electronics, microcontroller and button/LED interfaces, and the communication hardware for the paired units. The command-and-acknowledgement behavior followed a Navy-provided requirement.',
    system:'Two cooperating stations exchange the selected order and its acknowledgement. Indicators, input scanning, local power conversion and communication circuitry form the operator-facing hardware.',
    outcome:'Hardware design evidence is available. The final EOT firmware source has not yet been located in the supplied archive, so the deployed software behavior is not independently claimed.',
    note:'Keep exact command tables, identifiers and protocol timing out of public material until approved.'
  },
  {
    id:'navigation-light-panel', title:'Navigation-light monitoring panel', group:'Marine & defence', period:'Around 2021', context:'Denki / Squadron', status:'Completed engineering and test',
    lead:'A shipboard panel that detects lamp failure and alerts the operator while supporting a backup light.',
    challenge:'A commanded navigation light can fail without being obvious from the bridge. The operator needed a clear indication of which lamp was affected and a rapid fallback path.',
    contribution:'I designed the four-layer control PCB, selected components, wrote firmware, implemented current-based lamp monitoring, alarm and indicator behavior, panel brightness control and backup-lamp switching.',
    system:'The panel observes the current of each commanded lamp. If current is absent after a defined delay, it identifies the affected position, sounds an alarm and supports switching to a backup lamp. The operator can acknowledge the alarm.',
    outcome:'The design and testing were completed; the final vessel-specific deployment details still need confirmation.',
    note:'Do not imply a particular maritime certification without documents. “NLP” here means Navigation Light Panel.'
  },
  {
    id:'sagar-samra', title:'Sagar Samra offshore motor-panel recovery', group:'Marine & defence', period:'Date to confirm', context:'Offshore field engineering', status:'Restoration described by owner',
    lead:'Offshore diagnosis and recovery of a 6.6 kV firefighting motor soft-start panel under severe time and documentation constraints.',
    challenge:'The firefighting motor system was unavailable, documentation was incomplete and remote technical support was limited on the rig. A safe, systematic diagnosis was required before operations could resume.',
    contribution:'I mapped the panel’s functional blocks, compared two similar assemblies, isolated damaged sections, checked replacement parts and restored the working configuration. This was field troubleshooting and recovery, not a claim that I designed the original 6.6 kV panel.',
    system:'The investigated system contained the incoming high-voltage path, a thyristor soft-start stage, control and isolation sections, and interfaces to the firefighting motor.',
    outcome:'The owner describes successful restoration of the panel. Formal test records and approved photographs should be added before publishing detailed performance or operational claims.',
    note:'This page intentionally omits live-work procedures and exact protection or bypass details.'
  },
  {
    id:'barc-custom-pcbs', title:'Custom PCB design and technical supply', group:'BARC-related', period:'Multiple assignments', context:'BARC-related', status:'Multiple deliveries described',
    lead:'Turning requirement notes and early schematics into buildable, assembled and tested electronics.',
    challenge:'Some assignments began with an assumption-level circuit and urgently needed parts that were difficult to source. The work required more than drawing traces: the board had to be practical to build and fit for its intended task.',
    contribution:'I reviewed the circuit, selected components, created or refined schematics and board layouts, procured boards and parts, assembled hardware, tested against the requested function and supplied the resulting assembly or materials.',
    system:'The deliverables varied by request, so this is a program-level account of custom electronics work rather than one product with a single specification.',
    outcome:'The owner reports multiple completed design-and-supply assignments. Individual quantities, dates and client-approved examples remain to be selected.',
    note:'Publish only approved examples; keep confidential specifications, drawings and procurement details out of the public version.'
  },
  {
    id:'barc-power-supply', title:'10 V / 100 A precision CC/CV supply', group:'BARC-related', period:'Date to confirm', context:'BARC-related', status:'Three units reported delivered',
    lead:'A high-current DC supply with digitally set current and voltage limits and precision display calibration.',
    challenge:'The requirement combined substantial output current with controllable constant-current and constant-voltage operation. Displayed and commanded values needed careful calibration, not just a large transformer and power stage.',
    contribution:'I designed the transformer-based supply and transistor power stage, integrated voltage/current feedback, used a microcontroller and high-resolution DAC for setpoints, and calibrated the display against a high-accuracy meter.',
    system:'A transformer and rectification stage feed the power devices. Feedback closes the regulation loop; digital setpoints adjust the CC/CV references and a display presents the operating values.',
    outcome:'I report building, testing and delivering three units. Exact accuracy, efficiency and stability numbers are withheld until supported by test records.',
    note:'Use high-level architecture and approved photographs only; confirm BARC naming and release permission.'
  },
  {
    id:'barc-gamma', title:'Mobile gamma-detection mechanism concept', group:'BARC-related', period:'Date to confirm', context:'BARC-related', status:'Mechanical and motion concept tested',
    lead:'A directional, motorized housing concept for a proposed mobile radiation-sensing and imaging system.',
    challenge:'A paper concept had to become a mechanically workable scanning assembly. The proposed sensor housing was heavy, requiring careful gear, motor and mounting choices.',
    contribution:'I designed the body, horn-like directional chamber, gear and motion mechanism, sensor space and camera mount; chose the drive components and controller; and automated the required scanning movement.',
    system:'The concept combined horizontal and elevation movement, a directional sensor opening and a camera aligned with the intended observation direction. The public account avoids sensitive detection specifications.',
    outcome:'The mechanical and motion functions were tested. I did not conduct gamma-source or radiation-sensor validation; this must not be presented as a certified detector.',
    note:'Publish no sensitive drawings, detection thresholds, operational procedures or radioactive-test claims.'
  },
  {
    id:'barc-capacitance', title:'Precision capacitance-sensing circuit', group:'BARC-related', period:'Date to confirm', context:'BARC-related', status:'Circuit developed; application to confirm',
    lead:'An analogue measurement path for very small capacitance changes from a tanker-related sensor.',
    challenge:'Small changes at roughly picofarad scale are easily obscured by wiring, parasitic capacitance and noise. The signal had to become usable for downstream measurement.',
    contribution:'I worked on circuit selection, analogue conditioning, schematic design and testing for the sensor interface. The project record mentions ADS12204 and INA138 devices, but their exact roles and part numbers need schematic verification.',
    system:'The sensor produces a capacitance-dependent response which the front-end electronics condition and digitize. Grounding, wiring and stability are central to the design.',
    outcome:'The sensing circuit was developed and tested. The exact tanker variable—level, quantity, density or presence—has not been confirmed and is not claimed here.',
    note:'Do not publish unverified sub-picofarad accuracy or application-specific measurement performance.'
  },
  {
    id:'barc-filter', title:'Configurable analogue filter PCB', group:'BARC-related', period:'Date to confirm', context:'BARC-related', status:'Assembled and tested',
    lead:'One PCB configurable for low-pass, band-pass and high-pass signal-conditioning roles.',
    challenge:'The requirement began with a supplied filter concept/schematic. It had to be translated into an assembled board whose configuration could support different input-signal filtering needs.',
    contribution:'I implemented and refined the schematic in Eagle, designed and routed the PCB, sourced the components, assembled the board and tested the resulting filter behavior.',
    system:'A selectable analogue network determines whether lower, higher or a bounded frequency range passes from input to output. Exact frequencies and component values are omitted here.',
    outcome:'The owner reports successful assembly and testing. Measurement plots and approved board images would strengthen the final case study.',
    note:'Review the circuit and values for confidentiality before adding schematic images.'
  },
  {
    id:'barc-cooler', title:'Industrial cooler control system', group:'BARC-related', period:'Date to confirm', context:'BARC-related · BIJU_BHAI archive', status:'Outcome to confirm',
    lead:'A control architecture combining PLC-card electronics, an HMI, firmware and field communications for an industrial cooler.',
    challenge:'The assignment required the overall machine behavior to be defined and translated into operator controls, sensor inputs and equipment outputs.',
    contribution:'I designed the PLC card and HMI, wrote firmware, planned the operating sequence and integrated sensor and RS485/Wi-Fi communication paths across the system.',
    system:'The controller reads machine inputs, applies the process sequence and drives the relevant outputs; the HMI provides operator interaction and status. Precise control sequences are being reviewed.',
    outcome:'The technical design scope is described by the owner. Commissioning and delivery results remain to be confirmed before the public claim is strengthened.',
    note:'The archive location does not define the client; confirm approved project naming and publication rights.'
  },
  {
    id:'induction', title:'Industrial induction-heating controller', group:'Power & industrial', period:'2018 onward', context:'Industrial development · Francis Sir collaboration', status:'Continuing development',
    lead:'A resonant inverter controller developed through isolated switching, waveform feedback, tuning and process-control iterations.',
    challenge:'The resonant tank changes with the workpiece, coupling and temperature. The inverter must start safely, avoid an undesirable switching condition and regulate the process as the load moves.',
    contribution:'I designed controller electronics and STM32 firmware for gate timing, a high-frequency start, waveform sensing, operating-region decisions, frequency adjustment and PID-based target control. Relevant design and configuration work with Francis Sir belongs to this one induction project, not separate machine claims.',
    system:'The controller coordinates feedback from voltage/current or switching waveforms with the IGBT drive and operator target. Product-specific topology and exact power ratings need revision-level confirmation.',
    outcome:'The controller has been iterated in industrial development. The previously cited 5–100 kW range describes multiple systems or configurations and is not a validated rating for one unit.',
    note:'Exact part numbers, tuning range, efficiency and long-duration results require verified records.'
  },
  {
    id:'ozone', title:'Custom ozone generator for wastewater treatment', group:'Power & industrial', period:'Around 2019–2021', context:'STP / wastewater application', status:'Installed, according to owner',
    lead:'An end-to-end high-voltage ozone-generation product developed from a costly commercial reference.',
    challenge:'The available solution was expensive and difficult to tailor to the site. A practical replacement required power electronics, gas-discharge hardware, enclosure design, controls and installation to work together.',
    contribution:'I analysed a reference unit, tested isolated IGBT switching and current feedback, developed transformer and insulation arrangements, designed the discharge chamber, case, panel, PCB, firmware and wiring, and installed the integrated machine.',
    system:'A controlled power stage drives a high-voltage transformer and dielectric discharge region through which oxygen-bearing gas flows. The controller coordinates output, indications and protective functions.',
    outcome:'The owner reports successful deployment in an STP environment. Ozone output and disinfection performance are not quantified without site test records.',
    note:'Do not present exposed high-voltage construction details or unsupported water-treatment efficacy claims.'
  },
  {
    id:'idemi-mcb', title:'Three-phase IoT MCB and energy monitor', group:'Power & industrial', period:'2022', context:'IDEMI-related', status:'Development and calibration completed',
    lead:'A motorized remote-switching unit combined with three-phase electrical measurement, energy logging and an operating dashboard.',
    challenge:'The system had to switch remotely while accurately measuring voltage, current, power factor and accumulated energy on a three-phase supply, all within a practical enclosure.',
    contribution:'I selected and tested CT/PT arrangements, designed the PCB and power architecture, integrated the measurement IC, switching motor, firmware, dashboard and enclosure, and worked on calibration using IDEMI reference equipment.',
    system:'A metering front end senses the three phases while a controller communicates measurements and commands. A motor mechanism physically operates the MCB; the enclosure holds the electrical and mechanical assembly.',
    outcome:'Hardware, firmware, enclosure, dashboard and calibration work are documented. Final field deployment and numerical accuracy require confirmation.',
    note:'Do not publish live endpoints, credentials or a formal metering-certification claim.'
  },
  {
    id:'pottery', title:'Wide-input pottery-wheel motor controller', group:'Power & industrial', period:'Date to confirm', context:'Rural equipment / production program', status:'Production and inspection work reported',
    lead:'A full product-development effort for a gear-driven pottery wheel operating from difficult rural mains conditions.',
    challenge:'The motor had to start and run smoothly across a wide and unstable AC input while supporting battery charging, speed control, protection and a design suitable for quantity production.',
    contribution:'I worked across requirement interpretation, motor and power architecture, controller and protection design, PCB revisions, calibration, procurement, vendor coordination and production preparation.',
    system:'The design combines wide-input conversion, a controlled low-voltage motor output, speed command and feedback, charging functions and protective logic. Exact limits vary by revision.',
    outcome:'The owner reports extensive prototype, inspection and production work. Final quantities and acceptance documents should be reviewed before a public number is stated.',
    note:'Avoid presenting a programme inspection as universal certification of every revision.'
  },
  {
    id:'magnetic-polisher', title:'Magnetic jewellery-polisher controller', group:'Power & industrial', period:'Date to confirm', context:'Jewellery machinery', status:'Controller developed',
    lead:'Embedded control for a magnetic-pin finishing machine with timed forward and reverse operation.',
    challenge:'The motor’s start winding had to be energized only during startup; direction changes and long polishing cycles also required sequencing and protection against abnormal loading.',
    contribution:'I designed relay control for start/run windings and reversal, developed timing and user-interface logic, measured motor current for overload/underload indications, and implemented display, button, PCB and firmware work.',
    system:'The controller manages the selected cycle, energizes the appropriate winding and direction path, monitors load and displays state and time to the operator.',
    outcome:'The controller design and firmware are documented; exact production quantities and dates need confirmation.',
    note:'Present the device as industrial jewellery-finishing equipment, not a medical or chemical treatment.'
  },
  {
    id:'cb-re-ventilation', title:'Parking CO monitoring and ventilation control', group:'Power & industrial', period:'Date to confirm', context:'CBRE-maintained BKC property', status:'Repair and automation described',
    lead:'Recovery and automation of a multi-zone basement carbon-monoxide sensing and ventilation system.',
    challenge:'A large parking complex had many distributed sensors and fan-control zones. Several sensors or power connections had failed, and the ventilation system was being operated by a manual schedule.',
    contribution:'I traced sensor locations from drawings, checked and repaired wiring and supplies, refurbished many sensor units, designed ten replacement 4–20 mA CO transmitters, and implemented threshold-based controller and relay/contactor operation.',
    system:'Sensors report gas concentration by zone. A controller reads the signals and commands the relevant exhaust and inlet-fan contactors when the configured threshold is exceeded.',
    outcome:'The owner reports restoration and automation work across the site. Site acceptance and measured exposure/ventilation outcomes still require records.',
    note:'Avoid claiming a particular building-code compliance level or guaranteed air-quality result.'
  },
  {
    id:'water-atm', title:'RFID prepaid water-dispensing system', group:'Power & industrial', period:'Around 2017', context:'Water dispensing · Hyderabad', status:'Operating installation reported',
    lead:'A prepaid Water ATM that uses RFID, pulse-counted flow measurement and local transaction storage.',
    challenge:'The unit had to authenticate a user card, dispense a selected quantity, keep balances and stop the pump at the right time using affordable local electronics.',
    contribution:'I developed ATmega328P control firmware, integrated an RC522 RFID reader, calibrated the pulse-output flow meter, controlled the pump relay and implemented SD-card records, LCD feedback and keypad/card administration.',
    system:'The user presents a card and selects a volume. The controller checks authorization, runs the pump, counts flow pulses, stops at the target and updates the balance and local record.',
    outcome:'The owner reports operating installations in Hyderabad plants. Quantity, uptime and transaction accuracy are not asserted without logs.',
    note:'Do not publish card data or administrative credentials.'
  },
  {
    id:'forced-air-warmer', title:'Forced-air patient warmer', group:'Medical & laboratory', period:'2026', context:'AICAN product development', status:'About ten units built, per owner',
    lead:'A blower, heater, filtration and closed-loop control system developed from an inadequate box-and-hair-dryer reference.',
    challenge:'The initial reference moved too little air and did not control temperature well enough for its intended warming-blanket application. Airflow, noise, heating, filtering and user controls had to be developed as one system.',
    contribution:'I compared blowers, selected the air-moving and heater arrangement, designed mechanical mounts and ducting, integrated a custom filter, developed the controller PCB, touchscreen HMI and firmware, and tuned temperature and fan control.',
    system:'Filtered air passes through a blower and heater to a compatible warming blanket. Sensors, control software and the HMI regulate the device and present operating and fault states.',
    outcome:'I report personally assembling about ten units. Clinical deployment, regulatory clearance, core-temperature outcomes and quantified temperature stability are not established by the current evidence.',
    note:'This is an engineering development account, not a clinical-efficacy or certification statement.'
  },
  {
    id:'ph-touch', title:'Touchscreen pH/EC laboratory meter', group:'Medical & laboratory', period:'2026', context:'AICAN · Crest project', status:'Development and testing ongoing',
    lead:'A connected electrochemical measurement platform spanning analogue front end, temperature sensing, calibration, firmware and interface software.',
    challenge:'The original pH-amplifier approach did not provide the needed stability. Tiny bipolar electrode signals and temperature-dependent behavior required improved conditioning and calibration logic.',
    contribution:'I investigated the amplifier, designed a differential input stage, integrated precision ADC and PT100 measurement, developed touchscreen firmware and pH calculations, and debugged communications and user-interface problems.',
    system:'A pH electrode and temperature probe feed analogue and digital measurement paths. The ESP32-based controller calculates and displays readings, supports calibration and communicates with companion applications in the evolving software branches.',
    outcome:'Multiple hardware and firmware generations are documented. Final accuracy, stability and product-delivery claims must be backed by calibration and acceptance records.',
    note:'This portable touchscreen platform is separate from the desktop instrument and Crest TLC.'
  },
  {
    id:'ph-desktop', title:'Desktop pH/EC instrument', group:'Medical & laboratory', period:'2026 archive', context:'AICAN · Crest project', status:'Design generations documented',
    lead:'A benchtop instrumentation branch with separate analogue, power, computing and connectivity boards.',
    challenge:'Productising a laboratory meter as a desktop system required more than a single sensor PCB: measurement, mechanical fit, power, computing and external interfaces all needed a coherent architecture.',
    contribution:'The archive contains V1/V2 designs spanning the main board, pH and EC amplifiers, power board, junction board, Ethernet/hub, Raspberry Pi integration and mechanical files. The exact personally completed and deployed subset still needs attribution review.',
    system:'The instrument separates sensing front ends, computing and interface electronics into distinct assemblies within a benchtop form factor.',
    outcome:'Design files document substantial development. Final assembly, calibration and deployment status remain unconfirmed.',
    note:'Do not merge this desktop branch with the portable touchscreen meter or TLC.'
  },
  {
    id:'dialysis-cleaner', title:'Dialysis tubing-cleaning machine', group:'Medical & laboratory', period:'Date to confirm', context:'Medical equipment development', status:'System developed; validation to confirm',
    lead:'A multi-nozzle fluid-handling machine for patient-wise dialysis tubing-cleaning workflows.',
    challenge:'Several connected lines, water and chemical stages, patient identification and pump protection had to be coordinated in a repeatable operator workflow.',
    contribution:'I designed the HMI and control hardware for solenoid valves and the pump, added flow sensing and no-flow shutdown, integrated patient-wise process handling and a thermal-printer interface, and developed an EC-measurement element.',
    system:'The controller sequences the selected fluid paths through multiple nozzles, monitors water flow, stops the pump on a missing-flow condition and records the operator/patient workflow.',
    outcome:'The system-development work is described by the owner. Reuse safety, microbiological efficacy and regulatory compliance are not established and must not be implied.',
    note:'Avoid publishing cleaning recipes or claims that tubing reuse is safe without facility and regulatory validation.'
  },
  {
    id:'prep-engine', title:'Prep Engine bottle-life and motor platform', group:'Medical & laboratory', period:'2026 archive', context:'AICAN · Crest project', status:'Development branches documented',
    lead:'Bottle identification and life monitoring connected to BLDC motor control and an operator dashboard.',
    challenge:'The system had to identify a bottle, track permitted use, prevent invalid operation and coordinate the motor and operator display with faults and feedback.',
    contribution:'The project archive contains controller firmware, RFID hardware, revised main boards, motor-control code and a serial Bottle Life Monitor dashboard. My precise contribution to each software component and final deployed revision still needs a signed-off account.',
    system:'Bottle identification informs an enable/inhibit decision; the controller manages the motor and reports status to the operator interface. Hall feedback, speed control and watchdog/fault concepts appear in the development branches.',
    outcome:'Hardware and software development evidence is present. Customer delivery, the exact final configuration and validated safety behavior need confirmation.',
    note:'Describe the current version as development work until the release evidence is reviewed.'
  },
  {
    id:'rf-beauty', title:'RF Mini and RF Big electronics', group:'Medical & laboratory', period:'2018–2021 archive', context:'Beauty-equipment development', status:'PCB and firmware documented',
    lead:'Control and high-frequency power electronics for RF Mini and RF Big cosmetic-device variants.',
    challenge:'The equipment needed a controllable high-frequency output with an operator interface, timed sessions and a deliberate separation between control, power and supply boards.',
    contribution:'I worked on RF control electronics and firmware, the high-frequency transformer drive and the three-board architecture: control PCB, RF power PCB and power-supply PCB.',
    system:'The control board handles display, input, timer and status. A separate power board drives the high-frequency stage, while a supply board provides the required rails. The variants represent one product family.',
    outcome:'Schematic, board and firmware evidence is present; exact output characteristics and product validation still require confirmation.',
    note:'No skin-treatment effectiveness or medical claim is made.'
  },
  {
    id:'denki-antifouling', title:'Marine anti-fouling power module', group:'Power & industrial', period:'Around 2018', context:'Denki / Squadron', status:'Engineering completed; installation to confirm',
    lead:'A selectable 24 V constant-current/constant-voltage supply for a marine electrode-based process.',
    challenge:'The application needed controlled voltage and current across different operating variants and reliable low-voltage rails for display and control circuitry.',
    contribution:'I developed the power-supply PCB, used a toroidal transformer, implemented op-amp/transistor CC/CV control and operator potentiometers, and arranged the separate windings/rails for power and indication.',
    system:'A mains transformer supplies the regulated DC output and auxiliary electronics. The operator can adjust voltage/current according to the intended electrode process.',
    outcome:'The power module and several output variants are described by the owner. Field results and the exact process purpose should be confirmed.',
    note:'Do not claim that this electrical process desalinates seawater or makes it safe to drink; those statements are not scientifically established by the available evidence.'
  },
  {
    id:'denki-charger', title:'24 V / 10 A CC/CV battery charger', group:'Power & industrial', period:'Around 2017', context:'Denki / Squadron', status:'Design completed; deployment to confirm',
    lead:'A compact charger concept converting an approximately 48 V source to a controlled 24 V, 10 A charging output.',
    challenge:'The battery required bounded charge current and voltage rather than a direct connection to the source.',
    contribution:'I designed the CC/CV regulation concept, power stage and PCB for the charger and tested the design through the project development cycle.',
    system:'The converter limits current during charging and regulates the voltage when the target is reached. Exact charge profile and protection depend on battery chemistry.',
    outcome:'The design is archived; battery chemistry, prototype test values and field deployment need confirmation.',
    note:'Do not claim compatibility with a specific battery chemistry without verification.'
  },
  {
    id:'denki-ballast', title:'Electronic ballast for UV tube', group:'Power & industrial', period:'Around 2017', context:'Denki / Squadron', status:'Working prototype reported',
    lead:'An in-house electronic ballast developed after studying and rebuilding the operation of commercial reference circuits.',
    challenge:'The aim was to produce a reliable UV-tube driver while understanding the switching and feedback arrangement rather than using an off-the-shelf choke.',
    contribution:'I analysed reference ballasts, drew the schematic in Eagle, designed a small toroidal pulse transformer and MOSFET switching board, routed and assembled the PCB and tested it with the tube.',
    system:'A switching power stage and compact pulse transformer drive the UV lamp; feedback supports the operating condition. The exact lamp and output ratings remain unconfirmed.',
    outcome:'The owner reports a functioning prototype. Production and lifetime evidence are not yet available.',
    note:'The electrical and UV safety of a production lamp system is not established by this prototype.'
  },
  {
    id:'denki-igbt', title:'Isolated IGBT gate-drive experiment', group:'Power & industrial', period:'Around 2021', context:'Denki / Squadron', status:'Proof of concept',
    lead:'A driver and sensing test bed that informed later high-voltage ozone-generation work.',
    challenge:'A low-voltage controller could not directly drive a high-energy switching stage; isolation, gate behavior and current feedback needed bench validation.',
    contribution:'I tested a pulse-transformer drive path, IGBT switching, current sensing and feedback concepts before applying those lessons to a complete power system.',
    system:'The experimental chain separated the controller from the power switch and monitored current response. It was an engineering experiment, not a finished ozone generator.',
    outcome:'The driver concept was tested and used as a learning step for later design.',
    note:'No construction-ready high-voltage details are published.'
  },
  {
    id:'denki-offline-supply', title:'LNK304/306 low-cost supply', group:'Power & industrial', period:'Around 2018', context:'Denki / Squadron', status:'Prototype tested and reused',
    lead:'A low-cost mains-derived 3.3/5 V supply developed for connected control electronics.',
    challenge:'Small data loggers and home-automation boards needed a compact, economical low-voltage source.',
    contribution:'I studied the LNK30x family and application data, designed and assembled the PCB, tested several devices and incorporated the approach in later home-automation work.',
    system:'An offline converter produces the low-voltage rail from mains power. The output is non-isolated and must be treated as potentially hazardous.',
    outcome:'The owner reports a working design that continued operating in later applications.',
    note:'This is not an invitation to use a non-isolated supply in user-accessible circuits; enclosure and safety verification are essential.'
  },
  {
    id:'denki-zero-cross', title:'Zero-crossing heater-control prototype', group:'Power & industrial', period:'Around 2017', context:'Denki / Squadron', status:'Exploratory prototype',
    lead:'An early closed-loop AC-control exercise using mains zero-crossing detection and temperature feedback.',
    challenge:'The controller needed to align switching decisions with the AC waveform and respond to measured heater temperature.',
    contribution:'I designed and tested the detection PCB, microcontroller logic, AC load-control path and feedback-based heater switching.',
    system:'Zero-crossing information synchronizes the control decision; the temperature reading determines whether power should be applied or removed.',
    outcome:'The first practical test was successful, according to the owner. Precise controller part number and measured performance are unverified.',
    note:'Keep this as a supporting technical-development entry, not a flagship product.'
  },
  {
    id:'proximity-counter', title:'Proximity-sensor box counter', group:'Power & industrial', period:'Date to confirm', context:'Production sensing', status:'Preliminary entry',
    lead:'A contactless counter concept for boxes moving past a production-line sensing point.',
    challenge:'The sensor event needed to be converted into one reliable count per passing box.',
    contribution:'I developed the sensor interface and counting approach, considered filtering/debouncing and prepared PCB design material for the controller.',
    system:'A proximity input triggers embedded count logic and passes the throughput value to the chosen operator or machine interface.',
    outcome:'The local archive contains Eagle board/schematic evidence; final installed interface and deployment are not yet established.',
    note:'Supporting project only until client, date and tested result are confirmed.'
  },
  {
    id:'ha800', title:'HA800 home-automation controller', group:'Power & industrial', period:'Around 2017', context:'Rakas/Ruckus brand spelling to confirm', status:'Historic commercial product',
    lead:'An ATmega328P-based home controller with four fan-speed and four on/off channels, sold in hundreds of units according to the owner.',
    challenge:'The product needed a compact control board and enclosure that could operate household lights and fan-speed channels using a purchased remote-control interface.',
    contribution:'I configured the control channels, integrated relays and the remote arrangement, fitted the system into a case and prepared it for quantity sale. The final power-supply IC, exact four-channel population and division of PCB/firmware work need verification.',
    system:'Four channels were intended for phase-angle/PWM-based fan-speed control and four digital channels for on/off loads. A low-voltage supply and embedded controller managed the relay and output hardware.',
    outcome:'I report selling hundreds of units under the home-automation brand. The product is no longer sold; it is presented as historical commercial work, not a current offering.',
    note:'Confirm whether development began in 2017 or the archived 2018 revision, the exact brand spelling and power-supply part number.'
  },
  {
    id:'rs485-logger', title:'Production industrial RS485 data logger', group:'Power & industrial', period:'Date to confirm', context:'Freelance industrial telemetry', status:'Produced in quantity, per owner',
    lead:'An ESP32-S3 and A7670-based logger that timestamps RS485 data and buffers it locally when cloud communication is unavailable.',
    challenge:'Industrial data needed to be collected reliably from an RS485 source and retained during network outages instead of being silently lost.',
    contribution:'I designed the controller and power architecture, integrated the cellular module, RS485 interface, RTC and SD storage, and built the data-handling and cloud-forwarding behavior.',
    system:'The logger reads tagged data over RS485, associates it with RTC time, stores records on the SD card during connectivity loss and sends pending records to the cloud when communication returns. Exact cloud protocol and recovery guarantees remain to be confirmed.',
    outcome:'The owner reports quantity production. The client use case, quantity and field uptime have not yet been documented for public claims.',
    note:'Confirm the buck-converter IC and avoid exposing cloud credentials, endpoints or customer telemetry.'
  },
  {
    id:'crest-tlc', title:'Crest thin-layer chromatography controller', group:'Medical & laboratory', period:'2026 archive', context:'Crest project', status:'Separate project; outcome to confirm',
    lead:'UV illumination control and camera access for a separate thin-layer chromatography instrument project.',
    challenge:'The TLC instrument needed operator-controlled UV tube power and protective behavior alongside a camera connection for observation or recording.',
    contribution:'I controlled the UV tube on/off function, added the protections described in the requirement and provided USB access to the camera. The exact board, firmware and software boundaries still need a deeper project explanation.',
    system:'The control electronics manage UV illumination, while USB provides the camera-access path. This is independent of the pH meter, EC meter and KDS work.',
    outcome:'A separate Crest TLC project and application archive exist. Final instrument testing, completion and image-capture workflow need confirmation.',
    note:'Do not imply UV safety certification or analytical measurement performance without test records.'
  },
  {
    id:'mq6-controller', title:'Industrial MQ6 sensor and relay controller', group:'Power & industrial', period:'Date to confirm', context:'Commercial industrial product', status:'Hundreds sold, per owner',
    lead:'A simple, production-used sensor controller that switches a relay according to an MQ6 analogue reading.',
    challenge:'The customer needed a practical threshold response and a low-voltage control rail from a 24 V supply.',
    contribution:'I used the MQ6 analogue output with ADC reading and threshold logic to turn a relay on or off, and an LM2596 stage to convert 24 V to 5 V for the electronics.',
    system:'The sensor feeds the controller; firmware compares the measured value with its threshold and commands a relay. The power stage supplies the required low-voltage rail.',
    outcome:'The owner reports the product working in the market and sold in hundreds of units. It is intentionally a concise commercial-result story because the technical circuit is straightforward.',
    note:'Do not infer certified fire-alarm or life-safety performance from the archive folder name. Confirm the actual sensed gas and application.'
  }
];
