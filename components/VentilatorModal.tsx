'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface VentilatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VentilatorModal({ isOpen, onClose }: VentilatorModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-foreground/10 shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 float-right m-4 p-2 text-muted hover:text-accent transition-colors z-10 bg-background/80 backdrop-blur-sm border border-foreground/10"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif mb-3">Smart Ventilator System</h1>
            <p className="text-[14px] md:text-[15px] font-mono text-muted leading-[1.7]">
              Built this during my undergrad at VIT (2021) - a low-cost ventilator with automated control modes
            </p>
          </div>

          {/* The Problem */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-serif mb-3">The Problem</h2>
            <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7]">
              COVID-19 exposed massive ventilator shortages. Traditional ventilators are expensive, complex, and require constant supervision. Patients need mechanical breathing support, but the equipment and expertise aren't always available.
            </p>
          </section>

          {/* What We Built */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-serif mb-3">What We Built</h2>
            <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7] mb-4">
              A ventilator system with three operating modes, built around an AMBU bag compression mechanism. Total cost: <span className="text-accent font-semibold">₹4,800 ($60)</span>. The clinician picks the mode that fits the patient's condition.
            </p>
            
            {/* Hardware Stack */}
            <div className="bg-foreground/5 p-4 md:p-6 border-l-2 border-accent/40">
              <h3 className="text-[15px] md:text-[16px] font-mono font-semibold mb-3">The Hardware Stack</h3>
              <ul className="space-y-2 text-[13px] md:text-[14px] font-mono text-muted">
                <li><span className="text-accent">•</span> <strong>Pumping:</strong> NEMA-17 stepper motor compresses a 1100ml AMBU bag via pulley system</li>
                <li><span className="text-accent">•</span> <strong>Sensors:</strong> MAX30100 (heart rate + O2 saturation), MPU6050 (chest movement detection)</li>
                <li><span className="text-accent">•</span> <strong>Control:</strong> Arduino Uno + NodeMCU ESP8266</li>
                <li><span className="text-accent">•</span> <strong>Safety:</strong> GSM module (SIM800A) for alerts, buzzer for local alarms</li>
                <li><span className="text-accent">•</span> <strong>Driver:</strong> A4988 stepper motor driver</li>
              </ul>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-serif mb-4">How It Works</h2>
            
            {/* Mode 1 */}
            <div className="mb-6">
              <h3 className="text-[16px] md:text-[18px] font-serif mb-2 text-accent">Mode 1: Manual Control</h3>
              <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7] mb-3">
                Clinician sets two parameters via potentiometers:
              </p>
              <ul className="ml-6 space-y-1 text-[13px] md:text-[14px] font-mono text-muted mb-3">
                <li>• Tidal volume (0-1100ml)</li>
                <li>• Respiratory rate (15-33 breaths/min)</li>
              </ul>
              <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7]">
                Controller converts these into motor control signals. Simple as that.
              </p>
            </div>

            {/* Mode 2 */}
            <div className="mb-6">
              <h3 className="text-[16px] md:text-[18px] font-serif mb-2 text-accent">Mode 2: Trigger-Assisted</h3>
              <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7] mb-3">
                Patient initiates breath, ventilator assists.
              </p>
              <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7] mb-3">
                When the patient tries to breathe, chest cavity moves. MPU6050 accelerometer (placed on chest) detects this movement. Once acceleration crosses threshold → trigger breath cycle → reduce work of breathing for patient.
              </p>
              <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7]">
                Good for partial mechanical ventilation where patient has some respiratory function but needs support.
              </p>
            </div>

            {/* Mode 3 */}
            <div className="mb-6">
              <h3 className="text-[16px] md:text-[18px] font-serif mb-2 text-accent">Mode 3: Fully Automated</h3>
              <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7] mb-3">
                Zero manual input during operation. System determines optimal respiratory rate using:
              </p>
              <ul className="ml-6 space-y-1 text-[13px] md:text-[14px] font-mono text-muted mb-3">
                <li>• O2 saturation (from MAX30100)</li>
                <li>• Age category (clinician inputs once: 15-40, 40-50, 50-60, 60-70)</li>
              </ul>
              <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7] mb-3">
                <strong>The algorithm:</strong> Built a clustering approach with predefined coordinate sets (O2%, Age Category) → each maps to optimal RR. When new readings come in, calculate Euclidean distance from all cluster points → pick closest match → use its respiratory rate.
              </p>
              <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7]">
                As O2 drops, minute volume needs to increase. Since tidal volume is fixed (set by clinician), we increase RR to compensate.
              </p>
            </div>
          </section>

          {/* Failsafe System */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-serif mb-3">Failsafe System</h2>
            <p className="text-[13px] md:text-[14px] font-mono text-muted leading-[1.7]">
              Pulse sensor continuously monitors heart rate. If BPM goes above 100 or below 40:
            </p>
            <ul className="ml-6 mt-2 space-y-1 text-[13px] md:text-[14px] font-mono text-muted mb-2">
              <li>• Local buzzer activates</li>
              <li>• GSM module sends SMS to clinician</li>
              <li>• Happens in ~10 seconds of detection</li>
            </ul>
          </section>

          {/* Technical Details */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-serif mb-3">Technical Details</h2>
            <div className="space-y-4 text-[13px] md:text-[14px] font-mono text-muted leading-[1.7]">
              <p>
                <strong className="text-foreground">Communication:</strong> I2C protocol between sensors and microcontrollers. MAX30100 and MPU6050 both use I2C - each has unique 7-bit address, master (Arduino/NodeMCU) polls them for data.
              </p>
              <p>
                <strong className="text-foreground">Motor Control:</strong> Convert desired RR into step delays for NEMA-17. For example, 20 breaths/min = 3 second cycle. Split into compression time + release time, translate to motor steps with appropriate delays.
              </p>
              <p>
                <strong className="text-foreground">Why Two Microcontrollers:</strong> MAX30100 has design quirks - works better with NodeMCU (3.3V). But other peripherals need 5V (Arduino). So Arduino handles Mode 1, 2, and failsafe. NodeMCU handles Mode 3.
              </p>
            </div>
          </section>

          {/* What We Learned */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-serif mb-3">What We Learned</h2>
            <ul className="space-y-2 text-[13px] md:text-[14px] font-mono text-muted">
              <li><span className="text-accent">•</span> Pulse sensor is noisy - spent days filtering signal to get clean BPM</li>
              <li><span className="text-accent">•</span> A4988 driver gets hot (power dissipation) - added heatsink</li>
              <li><span className="text-accent">•</span> MAX30100 module's sensor placement matters - finger position affects readings significantly</li>
              <li><span className="text-accent">•</span> Stepper motor provides discrete airflow values - piston mechanism would give continuous control (tradeoff: complexity)</li>
            </ul>
          </section>

          {/* The Build */}
          <section className="mb-4">
            <h2 className="text-xl md:text-2xl font-serif mb-3">The Build</h2>
            <ul className="space-y-2 text-[13px] md:text-[14px] font-mono text-muted">
              <li><span className="text-accent">•</span> <strong>Frame:</strong> Wood + scrap materials</li>
              <li><span className="text-accent">•</span> <strong>Development:</strong> Arduino IDE</li>
              <li><span className="text-accent">•</span> <strong>Standards followed:</strong> IEC 60601-1-1, IEC 60601-1-2 (medical electrical equipment safety)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

